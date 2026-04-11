import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aiprospace.com'),
  title: {
    default: 'AIProSpace — AI Tools Reviews & Automation Blog',
    template: '%s | AIProSpace',
  },
  description:
    'Weekly AI tool reviews, automation tutorials, and money-making strategies. Join 12,400+ readers mastering AI and earning more online.',
  keywords: ['AI tools', 'AI automation', 'make money with AI', 'AI blog', 'ChatGPT', 'Midjourney'],
  authors: [{ name: 'AIProSpace Team' }],
  creator: 'AIProSpace',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiprospace.com',
    siteName: 'AIProSpace',
    title: 'AIProSpace — AI Tools Reviews & Automation Blog',
    description:
      'Weekly AI tool reviews, automation tutorials, and money-making strategies.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AIProSpace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIProSpace — AI Tools Reviews & Automation Blog',
    description: 'Weekly AI tools, automation tutorials and money-making strategies.',
    creator: '@aiprospace',
    images: ['/images/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} data-theme="dark">
      <head>
        {/* Prevent theme flash on load */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }} />
        {/* Google AdSense */}
        {adsenseId && adsenseId !== 'ca-pub-XXXXXXXXXX' && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="font-dm antialiased">
        {/* Google Analytics */}
        {gaId && gaId !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {clarityId && clarityId !== 'your_clarity_id_here' && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}

        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
