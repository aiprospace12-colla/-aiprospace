// AIProSpace QA Test — Playwright visual + functional audit
// Tests localhost:3001 vs usefulai.com side by side

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const LOCAL = 'http://localhost:3000';
const REFERENCE = 'https://usefulai.com';
const SCREENSHOTS_DIR = path.join(__dirname, 'test-screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const PAGES = [
  { path: '/',                         label: 'Homepage',             refPath: '/' },
  { path: '/blog',                     label: 'Blog',                 refPath: '/blog' },
  { path: '/blog/best-ai-writing-tools-2026', label: 'Blog Post',    refPath: '/blog/best-ai-tools-2025' },
  { path: '/tools',                    label: 'Tools Index',          refPath: '/tools' },
  { path: '/tools/ai-writing-tools',   label: 'Tools - Writing',      refPath: '/tools/best-ai-writing-tools' },
  { path: '/tools/ai-image-generators',label: 'Tools - Image Gen',    refPath: '/tools/best-ai-image-generators' },
  { path: '/courses',                  label: 'Courses',              refPath: '/courses' },
  { path: '/courses/chatgpt',          label: 'Courses - ChatGPT',    refPath: '/courses/chatgpt' },
  { path: '/guides',                   label: 'Guides',               refPath: '/guides' },
  { path: '/resources',                label: 'Resources',            refPath: '/resources' },
  { path: '/glossary',                 label: 'Glossary',             refPath: '/glossary' },
  { path: '/about',                    label: 'About',                refPath: '/about' },
  { path: '/contact',                  label: 'Contact',              refPath: '/contact' },
  { path: '/books/ai-books',           label: 'Books',                refPath: '/books' },
];

const WIDTHS = { desktop: 1280, mobile: 375 };

const results = [];

// ─── helpers ────────────────────────────────────────────────────────────────

async function seoAudit(page, url) {
  const issues = [];
  const title = await page.title();
  if (!title || title.length < 10) issues.push(`Missing or too-short title tag: "${title}"`);
  if (title.length > 70) issues.push(`Title too long (${title.length} chars): "${title.slice(0,60)}…"`);

  const metaDesc = await page.$eval('meta[name="description"]', el => el.content).catch(() => '');
  if (!metaDesc) issues.push('Missing meta description');
  else if (metaDesc.length < 50) issues.push(`Meta description too short (${metaDesc.length} chars)`);
  else if (metaDesc.length > 165) issues.push(`Meta description too long (${metaDesc.length} chars)`);

  const h1Count = await page.$$eval('h1', els => els.length);
  if (h1Count === 0) issues.push('No H1 tag found');
  if (h1Count > 1) issues.push(`Multiple H1 tags (${h1Count}) — should be exactly 1`);

  const imgsMissingAlt = await page.$$eval('img', imgs =>
    imgs.filter(img => !img.alt || img.alt.trim() === '').map(img => img.src.split('/').pop())
  );
  if (imgsMissingAlt.length > 0)
    issues.push(`${imgsMissingAlt.length} image(s) missing alt text: ${imgsMissingAlt.slice(0,3).join(', ')}`);

  return { title, metaDesc, h1Count, issues };
}

async function linkAudit(page, baseUrl) {
  const issues = [];
  const internalLinks = await page.$$eval('a[href]', (els, base) =>
    els
      .map(el => ({ text: el.innerText.trim().slice(0,40), href: el.getAttribute('href') }))
      .filter(l => l.href && (l.href.startsWith('/') || l.href.startsWith(base)))
  , baseUrl);

  // Check a sample of internal links (max 10 to keep it fast)
  const sample = internalLinks.slice(0, 15);
  for (const link of sample) {
    const fullUrl = link.href.startsWith('/') ? baseUrl + link.href : link.href;
    try {
      const res = await page.request.head(fullUrl, { timeout: 5000 }).catch(() => null);
      if (!res || res.status() >= 400) {
        issues.push(`Broken link (${res?.status() || 'error'}): "${link.text}" → ${link.href}`);
      }
    } catch {
      issues.push(`Unreachable link: "${link.text}" → ${link.href}`);
    }
  }
  return { total: internalLinks.length, checked: sample.length, issues };
}

async function contentAudit(page, pageLabel) {
  const issues = [];
  const bodyText = await page.$eval('body', el => el.innerText).catch(() => '');
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;

  if (pageLabel.includes('Blog Post') && wordCount < 800) {
    issues.push(`Blog post too short — only ~${wordCount} words (target: 2000+)`);
  }

  // Check for hero image on blog posts
  if (pageLabel.includes('Blog Post')) {
    const heroImg = await page.$('article img, .prose img, [style*="height: 280"], img[style*="280"]').catch(() => null);
    if (!heroImg) issues.push('No hero image found on blog post');
  }

  // Check FAQ on tool/course/guide pages
  if (pageLabel.includes('Tools') || pageLabel.includes('Courses') || pageLabel.includes('Guides')) {
    const hasFaq = await page.$('details.faq-item, [class*="faq"]').catch(() => null);
    if (!hasFaq) issues.push('No FAQ section found');
  }

  // Check tool logos on tool pages
  if (pageLabel.includes('Tools -')) {
    const toolLogos = await page.$$('img[src*="clearbit"], img[src*="google.com/s2/favicons"]');
    if (toolLogos.length === 0) issues.push('No tool logo images found (Clearbit/favicon API)');
  }

  // Check sidebar on pages that should have one
  if (!pageLabel.includes('Homepage') && !pageLabel.includes('About') && !pageLabel.includes('Contact')) {
    const sidebar = await page.$('aside').catch(() => null);
    if (!sidebar) issues.push('No sidebar found');
  }

  return { wordCount, issues };
}

async function functionalAudit(page, pageLabel, browser) {
  const issues = [];

  // Check search modal
  if (pageLabel === 'Homepage' || pageLabel === 'Blog') {
    await page.keyboard.press('Control+k');
    await page.waitForTimeout(500);
    const modal = await page.$('.search-overlay, [class*="search-box"]').catch(() => null);
    if (!modal) issues.push('Ctrl+K search modal does not open');
    else {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    }
  }

  // Check dark/light toggle
  const themeToggle = await page.$('button[aria-label*="theme"], button[title*="theme"], .theme-toggle, button:has(svg)').catch(() => null);
  if (!themeToggle) issues.push('No dark/light theme toggle found');

  // Check sidebar links work (if sidebar exists)
  const sidebarLinks = await page.$$('aside a').catch(() => []);
  if (sidebarLinks.length > 0) {
    const firstLink = sidebarLinks[0];
    const href = await firstLink.getAttribute('href');
    if (!href || href === '#') issues.push('First sidebar link has no valid href');
  }

  // Check download buttons on resources
  if (pageLabel === 'Resources') {
    const downloadBtns = await page.$$('a[href*="/api/download"]');
    if (downloadBtns.length === 0) issues.push('No download buttons found on Resources page');
  }

  return { issues };
}

async function checkResponsive(page, slug, label) {
  const issues = [];
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `${slug}--mobile.png`), fullPage: false });

  // Check if navbar collapses properly
  const navLinks = await page.$$('.tab-item').catch(() => []);
  if (navLinks.length === 0) issues.push('Mobile: navbar tabs not visible (may be hidden — check overflow)');

  // Check for horizontal scroll
  const hasHScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 10);
  if (hasHScroll) issues.push(`Mobile: horizontal scroll detected (body width: ${await page.evaluate(() => document.body.scrollWidth)}px)`);

  await page.setViewportSize({ width: 1280, height: 900 });
  return { issues };
}

// ─── main ────────────────────────────────────────────────────────────────────

(async () => {
  console.log('\n🚀 Launching AIProSpace QA Test...\n');

  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  // ── reference screenshots (usefulai.com) ──
  console.log('📸 Capturing usefulai.com reference screenshots...');
  const refPage = await context.newPage();
  for (const p of PAGES) {
    try {
      await refPage.goto(`${REFERENCE}${p.refPath}`, { waitUntil: 'networkidle', timeout: 15000 });
      await refPage.waitForTimeout(1000);
      const slug = p.path.replace(/\//g, '_').replace(/^_/, '') || 'home';
      await refPage.screenshot({ path: path.join(SCREENSHOTS_DIR, `ref--${slug}.png`), fullPage: true });
      console.log(`  ✓ usefulai.com${p.refPath}`);
    } catch (e) {
      console.log(`  ⚠ Could not load usefulai.com${p.refPath}: ${e.message.slice(0,60)}`);
    }
  }
  await refPage.close();

  // ── local page tests ──
  const localPage = await context.newPage();
  localPage.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      if (!text.includes('favicon') && !text.includes('clearbit')) {
        // store console errors per page later
      }
    }
  });

  for (const p of PAGES) {
    const slug = p.path.replace(/\//g, '_').replace(/^_/, '') || 'home';
    console.log(`\n🔍 Testing ${p.label} (${p.path})...`);

    const pageResult = {
      path: p.path,
      label: p.label,
      slug,
      status: 'PASS',
      issues: [],
      seo: {},
      links: {},
      content: {},
      functional: {},
      mobile: {},
      consoleErrors: [],
    };

    const consoleErrors = [];
    const handler = msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 120));
    };
    localPage.on('console', handler);

    try {
      const response = await localPage.goto(`${LOCAL}${p.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      const status = response?.status();
      if (status && status >= 400) {
        pageResult.issues.push(`HTTP ${status} error on page load`);
        pageResult.status = 'FAIL';
      }
      await localPage.waitForTimeout(1500);

      // Desktop screenshot
      await localPage.setViewportSize({ width: 1280, height: 900 });
      await localPage.screenshot({ path: path.join(SCREENSHOTS_DIR, `local--${slug}--desktop.png`), fullPage: true });

      // SEO audit
      pageResult.seo = await seoAudit(localPage, `${LOCAL}${p.path}`);
      pageResult.issues.push(...pageResult.seo.issues);

      // Link audit
      pageResult.links = await linkAudit(localPage, LOCAL);
      pageResult.issues.push(...pageResult.links.issues);

      // Content audit
      pageResult.content = await contentAudit(localPage, p.label);
      pageResult.issues.push(...pageResult.content.issues);

      // Functional audit
      pageResult.functional = await functionalAudit(localPage, p.label, browser);
      pageResult.issues.push(...pageResult.functional.issues);

      // Mobile responsive
      pageResult.mobile = await checkResponsive(localPage, slug, p.label);
      pageResult.issues.push(...pageResult.mobile.issues.map(i => `[Mobile] ${i}`));

    } catch (e) {
      pageResult.issues.push(`Page load failed: ${e.message.slice(0,100)}`);
      pageResult.status = 'FAIL';
    }

    pageResult.consoleErrors = consoleErrors.filter(e => !e.includes('favicon') && !e.includes('clearbit'));
    if (pageResult.consoleErrors.length > 0) {
      pageResult.issues.push(...pageResult.consoleErrors.map(e => `[Console Error] ${e}`));
    }

    if (pageResult.issues.filter(i => !i.includes('[Mobile]') && !i.includes('Console')).length > 0) {
      pageResult.status = 'FAIL';
    }

    localPage.removeListener('console', handler);

    console.log(`  Status: ${pageResult.status}`);
    if (pageResult.issues.length > 0) {
      pageResult.issues.forEach(i => console.log(`  ⚠ ${i}`));
    } else {
      console.log('  ✓ No issues found');
    }

    results.push(pageResult);
  }

  await localPage.close();
  await browser.close();

  // ─── generate report ────────────────────────────────────────────────────────
  console.log('\n📄 Generating TEST-REPORT.md...\n');

  const passing = results.filter(r => r.status === 'PASS').length;
  const failing = results.filter(r => r.status === 'FAIL').length;
  const allIssues = results.flatMap(r => r.issues.filter(i => !i.includes('[Mobile]') && !i.includes('[Console')));
  const criticalIssues = allIssues.filter(i =>
    i.includes('404') || i.includes('Broken') || i.includes('failed') || i.includes('Missing meta') || i.includes('No H1')
  );

  let md = `# AIProSpace Test Report
Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
Tested against: ${LOCAL} vs ${REFERENCE}

---

## Summary

| Metric | Value |
|--------|-------|
| Total pages tested | ${results.length} |
| Pages passing | ${passing} |
| Pages with issues | ${failing} |
| Total issues found | ${allIssues.length} |
| Critical bugs | ${criticalIssues.length} |

---

## Page-by-Page Results

`;

  for (const r of results) {
    const icon = r.status === 'PASS' ? '✅' : '❌';
    md += `### ${icon} ${r.label} (\`${r.path}\`)
**Status:** ${r.status}
**Screenshots:** \`test-screenshots/local--${r.slug}--desktop.png\` / \`test-screenshots/local--${r.slug}--mobile.png\`
**SEO:** Title: \`${r.seo.title?.slice(0, 60) || 'N/A'}\` | H1 count: ${r.seo.h1Count ?? 'N/A'}
**Word count:** ~${r.content.wordCount ?? 'N/A'} words

`;
    if (r.issues.length === 0) {
      md += `**Issues:** None — page looks good ✓\n\n`;
    } else {
      md += `**Issues found:**\n`;
      r.issues.forEach(i => { md += `- ${i}\n`; });
      md += '\n';
    }
    md += '---\n\n';
  }

  // Critical bugs
  md += `## 🚨 Critical Bugs (Fix First)\n\n`;
  if (criticalIssues.length === 0) {
    md += 'No critical bugs found.\n\n';
  } else {
    criticalIssues.forEach((issue, i) => { md += `${i + 1}. ${issue}\n`; });
    md += '\n';
  }

  // Design differences
  md += `## 🎨 Design Differences vs UsefulAI\n\n`;
  md += `Compare screenshots in \`test-screenshots/\` folder:
- \`ref--*.png\` = usefulai.com reference
- \`local--*--desktop.png\` = AIProSpace desktop
- \`local--*--mobile.png\` = AIProSpace mobile (375px)

Key areas to compare:
1. Navbar height and spacing
2. Card grid layout on homepage
3. Sidebar width and link styling
4. Table formatting on tool/course pages
5. Typography sizes and line heights
6. Color tokens (dark mode bg should be #0f0f0f)

`;

  // SEO summary
  md += `## 🔍 SEO Issues\n\n`;
  const seoIssues = results.flatMap(r =>
    (r.seo?.issues || []).map(i => `**${r.label}** (\`${r.path}\`): ${i}`)
  );
  if (seoIssues.length === 0) {
    md += 'No SEO issues found.\n\n';
  } else {
    seoIssues.forEach(i => { md += `- ${i}\n`; });
    md += '\n';
  }

  // Mobile issues
  md += `## 📱 Mobile Issues (375px)\n\n`;
  const mobileIssues = results.flatMap(r =>
    r.issues.filter(i => i.includes('[Mobile]')).map(i => `**${r.label}**: ${i.replace('[Mobile] ', '')}`)
  );
  if (mobileIssues.length === 0) {
    md += 'No mobile issues found.\n\n';
  } else {
    mobileIssues.forEach(i => { md += `- ${i}\n`; });
    md += '\n';
  }

  // What to fix manually
  md += `## 🔧 What Still Needs Manual Fixing\n\n`;
  md += `1. Blog post word count — current posts use template content (~300 words). Need 2000+ word articles per post.
2. Tool logos — some Clearbit logos may not load for lesser-known tools. Add fallback UI.
3. Visual pixel-perfect comparison — review screenshots manually against usefulai.com reference.
4. Download buttons — PDF generation works but PDFs are minimal. Expand content quality.
5. Mobile sidebar — sidebar is hidden on mobile (\`hidden md:block\`). Consider adding hamburger menu.\n\n`;

  fs.writeFileSync(path.join(__dirname, 'TEST-REPORT.md'), md);
  console.log('✅ TEST-REPORT.md written');

  // ─── print summary ───────────────────────────────────────────────────────
  console.log('\n════════════════════════════════════════════════════════');
  console.log('                 QA TEST COMPLETE');
  console.log('════════════════════════════════════════════════════════');
  console.log(`  Pages tested : ${results.length}`);
  console.log(`  Passing      : ${passing}`);
  console.log(`  Failing      : ${failing}`);
  console.log(`  Total issues : ${allIssues.length}`);
  console.log(`  Critical     : ${criticalIssues.length}`);
  console.log(`  Screenshots  : test-screenshots/ (${results.length * 2 + PAGES.length} files)`);
  console.log(`  Report       : TEST-REPORT.md`);
  console.log('════════════════════════════════════════════════════════\n');

  results.forEach(r => {
    const icon = r.status === 'PASS' ? '✅' : '❌';
    console.log(`  ${icon} ${r.label.padEnd(24)} ${r.issues.length} issue(s)`);
  });
  console.log('');
})();
