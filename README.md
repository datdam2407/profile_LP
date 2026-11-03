# JollyD App — Developer Studio

Bilingual (English / Vietnamese), dark-theme Next.js website for a multi-app Android developer brand.

## Local development
Requires Node.js 18.17+.

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Brand details included
- Brand: JollyD App
- Support contact: damtiendat24072000@gmail.com
- Languages: English / Vietnamese (language switch in header)
- First listed app: Ôn Thi GPLX A1

## Before going live
1. Buy a domain and replace `JollyD.app` in `app/layout.tsx` metadataBase with the domain you actually own.
2. Confirm the legal developer identity and a dedicated privacy contact. The provided email is currently used as the support contact.
3. Complete every bracketed placeholder on Privacy Policy, Terms, and Account Deletion pages.
4. Audit all SDKs (including Google Mobile Ads / AdMob, analytics, crash reporting) and make the privacy policy and Play Console Data safety declarations match actual app behavior.
5. Add actual Google Play URLs, app icon, screenshots, version details, and release notes after publication.
6. Verify whether your app supports account creation. Only publish the account deletion process if applicable, and ensure the in-app deletion flow exists when required.
7. Run `npm run build` before deployment.

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in to Vercel with GitHub and choose **Add New → Project**.
3. Import the repository. Vercel should detect Next.js automatically.
4. Keep the default build settings (`npm run build`); no environment variables are needed for this starter.
5. Deploy and test all pages on the generated `vercel.app` URL.
6. In Vercel **Project → Settings → Domains**, add your purchased domain and follow the exact DNS records shown there.
7. After DNS verification and HTTPS activation, update `metadataBase` and any canonical URLs to the final domain.

## Important
Legal pages are editable templates, not legal advice or a ready-made compliance guarantee. Review the actual data practices and local legal requirements before publishing.
