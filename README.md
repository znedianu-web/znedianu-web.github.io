# Zac Nedianu — Portfolio Website

Static HTML, CSS and JavaScript portfolio for https://zacnedianu.com/.

## Hosting

- Repository: `znedianu-web/znedianu-web.github.io`
- Existing production branch: `main`, served by GitHub Pages.
- `CNAME` retains `zacnedianu.com`.
- Existing DNS and email configuration require no changes for this release.

## Release preparation — 20 October 2026

Prepared against commit `bea98a1`. Zac approved publication on 20 October 2026.

The homepage contains the introduction; AfterDark, No Splits at 4ZZZ and Lucas BMX featured projects; services; CATPISS, wedding and cover artwork collections; the optional original 44-photo collection; About; and email enquiries.

Dates and credits were confirmed by Zac. Commissions, personal work, source photography and artwork contributions are described separately where applicable.

## Files

- `index.html`: page content, image dimensions, responsive sources and search/social metadata.
- `styles.css`: responsive presentation and focus/reduced-motion styles.
- `script.js`: original gallery filters, enlarged image viewer and project interactions.
- `assets/images/`: original photographs plus smaller 640px/960px variants where applicable.
- `assets/projects/`: featured and selected project media, including the 34-second BMX video.
- `assets/social-preview.jpg`: 1200 × 630 sharing card.
- `robots.txt`, `sitemap.xml`, `CNAME`, `favicon.svg`: hosting and discovery files.

No build command or third-party JavaScript dependency is required. For local review:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766/.

## Validation completed

- Local asset paths and responsive image variants exist; section IDs are unique and navigation targets resolve.
- Content photographs have intrinsic dimensions; the generated original gallery sets dimensions and responsive sources in JavaScript.
- Production metadata allows indexing and uses the canonical domain. The separate development preview remains noindex.
- The original gallery contains 44 photographs. Music and Skate filter counts checked; expand/collapse and enlarged viewing checked.
- Phone layout checked at 390 × 844 with no horizontal overflow.
- BMX playback checked: 1080 × 1920, 34.16 seconds, no playback error; closes pause playback.
- Social image verified at 1200 × 630. Actual platform previews can only be confirmed after deployment.
- No bandwidth-throttled or independent accessibility audit has been completed. Email links were inspected; mailbox delivery was not tested.

## Publishing

The owner completed the final review and approved publication. This release uses the existing Pages source on `main`. Preserve existing assets and domain files. After deployment, verify the public homepage, project media, contact links, canonical URL and social image URL.

The optional sky-spot cleanup previously discussed for wedding image DSC01814 has not been applied. The uploaded edit is preserved.
