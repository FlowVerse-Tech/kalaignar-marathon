# Kalaignar Memorial International Marathon — Official Showcase & Portfolio Website

A minimal, fully responsive, animated single-page showcase and credibility website for the **Kalaignar Memorial International Marathon**. Built to present the marathon’s history, Guinness World Record achievement, public health charity impact, and community inclusivity to authorities, sponsors, and partners.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Tokens: `#F26A1B` Orange, `#111111` Dark, `#F5F5F5` Section Gray, `#6B7280` Gray)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-triggered fade-ups, count-up stats, gentle floating photo tilts)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline optimized SVGs

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Key Configuration & Guides

### 1. How to Turn on Registration
All registration CTA buttons across the website are centralized and locked to **"Coming Soon"** by default (with a hover tooltip: *"Registrations opening soon"*).

To switch on live registrations when ready:
1. Open [`src/config/config.ts`](file:///c:/Users/ELCOT/Desktop/kalaignar-marathon/src/config/config.ts)
2. Change `registrationOpen` to `true`:
   ```typescript
   export const siteConfig = {
     name: "Kalaignar Memorial International Marathon",
     // ...
     registrationOpen: true, // <-- set to true
     registrationUrl: "https://your-registration-portal.com", // <-- add registration link
   };
   ```
3. That’s it! All CTA buttons in the Navbar, Hero, and Page automatically convert from disabled "Coming Soon" pills to active "Register Now" links.

---

### 2. How to Replace Image Placeholders with Real Photos
The site uses a custom, reusable `<ImagePlaceholder />` component. Each placeholder specifies the exact purpose and recommended pixel dimensions.

To supply your real photos:
1. Place your images in the `public/images/` directory (e.g., `public/images/hero.jpg`, `public/images/centenary.jpg`).
2. Pass the `src` prop to the corresponding `<ImagePlaceholder />` or update the data in [`src/data/content.ts`](file:///c:/Users/ELCOT/Desktop/kalaignar-marathon/src/data/content.ts).
   ```tsx
   <ImagePlaceholder
     src="/images/hero.jpg"
     alt="Runners at the Kalaignar Centenary Marathon"
     label="Hero photo: runners at the marathon, 1920×1080"
     aspectRatio="aspect-[16/9]"
   />
   ```
3. Because the layout, aspect ratio, tilt, and rounded corners are preserved identically whether using placeholders or real images, your visual design will never break or shift.

---

### 3. How to Edit Copy & Content
All copy, edition archives, participant figures, quotes, and navigation links reside in a single file:
👉 [`src/data/content.ts`](file:///c:/Users/ELCOT/Desktop/kalaignar-marathon/src/data/content.ts)

- **Brand & Motto**: Edit `siteContent.brand`
- **Hero Headline & Badges**: Edit `siteContent.hero`
- **Statement & Philosophy**: Edit `siteContent.statement`
- **Built on Purpose Pillars**: Edit `siteContent.about.pillars`
- **Historical Journey (2020–2023 Editions)**: Edit `siteContent.journey.editions`
- **Impact Stats & Record Seals**: Edit `siteContent.impactStrip`
- **Inclusivity & Participation Data**: Edit `siteContent.inclusivity`
- **Partner Inquiries & Newsletter**: Edit `siteContent.partnerWithUs` and `siteContent.footer`

---

## 🏛️ Verified Edition Archive & Beneficiaries

| Edition | Format / Location | Runners | Record Seal | Healthcare Beneficiary |
| :--- | :--- | :--- | :--- | :--- |
| **2020 (1st)** | Global Virtual (COVID-19) | 8,549 (28 countries) | Asia Book of Records | TN Chief Minister's COVID-19 Relief Fund (₹23.4 Lakh) |
| **2021 (2nd)** | Global Virtual (Aug 7–31) | ~19,500 (37 countries) | World Records Union | COVID-19 Public Relief (₹56 Lakh) |
| **2022 (3rd)** | Besant Nagar to Marina Beach | 43,231 | Asia Book of Records | ICH Egmore Inpatient Children's Parents Shelter (₹1.22 Crore) |
| **2023 (4th)** | Kamarajar Salai, Marina Beach | 73,206 | **Guinness World Record** | Royapettah Govt Hospital Cancer Centre (₹3.42 Crore) |

---

## ♿ Accessibility & Design Details
- Fully responsive across mobile (375px), tablet (768px), desktop (1024px), and wide screens (1440px+).
- Respects `prefers-reduced-motion` for all Framer Motion transitions and floating animations.
- Accessible ARIA labels, focus states, and semantic HTML5 hierarchy.
- Zero future dates, venues, or ticket prices mentioned, maintaining focus on track record, charity impact, and institutional credibility.
