# Patrick’s Little Studio

A small English-language studio of seven printable mandalas for kids. Static HTML, no client framework, no external fonts or tracking scripts.

## Build

Install `requirements.txt`, then run `python build.py`. Deploy the `dist` directory. All pages, image previews, PDFs, robots and sitemap are generated together.

Set `SITE_URL=https://your-final-domain` when building for a public domain. The default is the private Sites review URL. Never submit a private preview to Search Console. After selecting the final public domain, rebuild to update every canonical URL and sitemap entry, deploy publicly and verify the responses before submitting the sitemap.

## Content and artwork

`content.json` contains seven distinct briefs, descriptions, coloring activities and related-page selections. `originals` preserves the generated printable artwork. `assets` contains the portrait and monochrome SVG mark. Patrick is explicitly a fictional AI-created host, not a claimed real teacher.

## SEO implementation

- Prebuilt indexable HTML for home, collection, seven designs and About (10 URLs).
- Unique titles, descriptions, one H1, absolute self-canonicals, descriptive image alt text and normal anchor links.
- BreadcrumbList and ImageObject markup on design pages; no fabricated Person credentials or reviews.
- Responsive WebP previews with explicit dimensions and lazy loading below the fold.
- A4 and Letter PDFs served as files with `X-Robots-Tag: noindex` in supported hosts, keeping HTML design pages as the search destinations.
- Terms, privacy and 404 have HTML `noindex`; legal pages remain crawlable and linked.
- Sitemap includes only indexable HTML. Real 404 document; no catch-all SPA redirect.

The long-tail page titles describe the artwork; keyword demand and ranking difficulty have not been measured. Indexing and rankings are not guaranteed. Hosting logs, operator contact details, privacy language and any new integrations should be reviewed before a public launch.
