# Trauzan Elevator Website

A premium, responsive multi-page business website built with Astro 5.

## Pages
- **Home:** full-width rotating hero slider, company introduction, services, approach, reasons to choose, gallery preview, customer-feedback invitation and enquiry CTA.
- **About:** company profile, owners, mission/vision, GSTIN, Udyam registration and certificate/document area; both supplied Delhi and Aligarh addresses are represented.
- **Services:** eight lift, elevator and escalator service categories.
- **Gallery:** responsive image gallery with accessible lightbox.
- **Contact:** three phone numbers, two email addresses, WhatsApp link, enquiry form and Google Maps embed.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Before publishing
1. Replace illustrative architecture/interior images with licensed elevator, lift, escalator, team and actual Trauzan project photographs. The gallery explicitly labels its current photos as visual inspiration, not completed company projects.
2. Add the original GST and Udyam certificate scans under `public/images/certificates/` and link them from `src/pages/about.astro`. Do not display unrelated/sample documents.
3. Verify GSTIN, Udyam number, owner spellings and both supplied addresses against original documents before going live. The Delhi address is used for the contact map; the Aligarh address is labelled as an additional address supplied.
4. The contact form uses `mailto:` and opens the visitor's email app. Connect a form endpoint if direct website form delivery is required.
5. Google Fonts and Unsplash image URLs are remote. Download/optimize approved production images locally if a fully self-hosted asset setup is desired.
6. Configure Google Search Console and submit `https://www.trauzanelevator.co.in/sitemap.xml` after deployment.

## Brand details entered
- Brand: Trauzan Elevator — All Lift Elevator & Escalator Services
- Owners: Bhamar Singh and Roop Singh
- Main phone: +91 9911806270
- Additional phones: +91 8287573495, +91 9711457761
- Emails: Trauzanelevator@gmail.com, Info@trauzanelevator.co.in
- Website: https://www.trauzanelevator.co.in
- Delhi address: Plot No. 1-A, 5GF, Ground Floor, Khasra No. 590, Nearby N.D. Model Public School, Sabhapur, St. 6, Milan Garden, Chaman Vihar, Gali No. 8, Block A, Sabhapur Extension, North East Delhi – 110094, India.
- Additional address supplied: Floor No. 0, Building No./Flat No. 0, Sikandarpur, Post Bonai, Thana Alampur, Bonai Road, Sikri, District Aligarh, Uttar Pradesh – 202133, India.
- GSTIN supplied: 09MIVPS2850P1ZS
- Udyam supplied: UDYAM-DL-05-0095911
