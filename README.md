# Patrick’s Little Studio

A small English-language studio of seven printable mandalas for kids. Static HTML, no client framework, no external fonts or tracking scripts.

## Build

Install `requirements.txt`, then run `python build.py`. Deploy the `dist` directory. All pages, image previews, print views, robots and sitemap are generated together.

Set `SITE_URL=https://your-final-domain` when building for a public domain. The default is the private Sites review URL. Never submit a private preview to Search Console. After selecting the final public domain, rebuild to update every canonical URL and sitemap entry, deploy publicly and verify the responses before submitting the sitemap.

## Content and artwork

`content.json` contains seven distinct briefs, descriptions, coloring activities and related-page selections. `originals` preserves the generated printable artwork. `assets` contains the portrait and monochrome SVG mark. Patrick is explicitly a fictional AI-created host, not a claimed real teacher.

## SEO implementation

- Prebuilt indexable HTML for home, collection, seven designs and About (10 URLs).
- Unique titles, descriptions, one H1, absolute self-canonicals, descriptive image alt text and normal anchor links.
- BreadcrumbList and ImageObject markup on design pages; no fabricated Person credentials or reviews.
- Responsive WebP previews with explicit dimensions and lazy loading below the fold.
- Dedicated noindex browser print views use original PNGs at 90% of printable width, capped at 167.4 mm, with 12 mm page margins for A4 and Letter.
- Terms, privacy and 404 have HTML `noindex`; legal pages remain crawlable and linked.
- Sitemap includes only indexable HTML. Real 404 document; no catch-all SPA redirect.

The long-tail page titles describe the artwork; keyword demand and ranking difficulty have not been measured. Indexing and rankings are not guaranteed. Hosting logs, operator contact details, privacy language and any new integrations should be reviewed before a public launch.

## Legal notices

The English notices in `legal.py` describe the personal, non-commercial project operated by LLUIS JANÉ VILES in Spain. Edit the operator constants there to update the public identity and email, then rebuild. They cover GitHub Pages hosting, Atomic Mail correspondence, a maximum six-month retention period after ordinary enquiries are resolved, and personal/classroom printing permissions.

The operator confirmed sole mailbox access, no forwarding, no copies outside Atomic Mail and no AI processing of correspondence. These are operational commitments: keep the notices aligned with actual practices. See `LEGAL_MAINTENANCE.md` for sources, review limits and changes that require reassessment. The notices are not a worldwide compliance certification.

GitHub Pages records IPs for security. Its `_headers` file is not supported on GitHub Pages. Print views use meta noindex and are excluded from the sitemap. Legal HTML uses meta noindex and is excluded from the sitemap. No optional trackers or consent banner are added. Introducing ads, analytics, uploads, accounts or child data collection requires a new assessment and implementation, not just a new paragraph.

Patrick is a fictional brand host; the project is real. The home focuses on the drawings, and the creative-process page keeps a concise truthful explanation.
