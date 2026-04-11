import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (_client) return _client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || url === 'your_supabase_url_here') {
    throw new Error('Supabase credentials not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
  }

  _client = createClient(url, key)
  return _client
}

export type Subscriber = {
  id?: string
  email: string
  created_at?: string
  source?: string
}

export async function addSubscriber(email: string, source: string = 'website') {
  const supabase = getClient()

  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ email, source }])
    .select()

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'already_subscribed' }
    }
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
