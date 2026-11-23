/**
 * Kalaignar Memorial International Marathon - Master Image Configuration
 * Maps every UI slot to an optimized WebP asset, alt text, and objectPosition.
 */

export interface ImageSlotConfig {
  src: string;
  alt: string;
  objectPosition: string;
  blurDataURL?: string;
  sizes?: string;
}

export const siteImages = {
  // Official Brand Title Lockup
  marathonTitleLockup: {
    src: "/images/marathon-title-transparent.webp",
    alt: "Kalaignar Memorial International Marathon",
    objectPosition: "center",
  },

  // Hero Section
  heroMain: {
    src: "/images/hero-main.webp",
    alt: "Illuminated start line gantry and massive crowd of runners assembled at dawn on Kamarajar Salai",
    objectPosition: "center 40%",
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAgCdASoQAAoAPxF2sVUvpyUjKA2g4A2JaQAAp7x45yA237zY+Q1A1bC1542fNuv3521bLzK9r+d66F2Vev/O9dC7Kvz1/53roXZV6/8710Lsq9f+d66F2Vev+AA=",
    sizes: "100vw",
  },
  heroThumbnail: {
    src: "/images/hero-thumbnail.webp",
    alt: "Chief Minister M.K. Stalin receiving the official Guinness World Record certificate on stage",
    objectPosition: "center 30%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAQCdASoQAAoAPxF2rlQuJyclsAsgoA2JaQCc/y3VjY1qK5G77Xz8/Q2z27Jz5x93n1H1P5x91w1P5x91vP31P1P5x91vP1P5x91vP31P1P5x91vP1P5x91vP1P5x91vP1P5x9wA=",
    sizes: "80px",
  },
  heroAvatar1: {
    src: "/images/avatar-1.webp",
    alt: "Marathon runner community participant",
    objectPosition: "center",
  },
  heroAvatar2: {
    src: "/images/avatar-2.webp",
    alt: "Marathon crowd participant",
    objectPosition: "center",
  },
  heroAvatar3: {
    src: "/images/avatar-3.webp",
    alt: "Marathon participant cheering",
    objectPosition: "center",
  },

  // Statement Section
  statementSpirit: {
    src: "/images/statement-spirit.webp",
    alt: "Enthusiastic runners surging past the start line surrounded by celebratory blue balloons and confetti",
    objectPosition: "center 30%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADQAQCdASoQAAoAPxFysVOvJyQjKA2g4A2JagDd3e+jK+lP486jQ5L2iM0VpL/e815q34V+K34V+K2+K34V+K34V+K2+K34V+K34V+K2+K34V+K2+K34V+K2+K34V+K2+AA==",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px",
  },
  statementRoute: {
    src: "/images/statement-route.webp",
    alt: "Overhead view of thousands of marathon runners in yellow shirts under lush tree-lined course",
    objectPosition: "center 50%",
    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAQCdASoQAAkAPxFysFQuJycjMA2g4A1JaQDd5e7Vp7GfO25h9p5uG//vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp/AA",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px",
  },

  // Built on Purpose Section
  purposeCommemoration: {
    src: "/images/purpose-commemoration.webp",
    alt: "Memorial bust of Kalaignar M. Karunanidhi adorned with floral garlands on the marathon presentation stage",
    objectPosition: "left 35%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAQCdASoQAAoAPxF2slSuJyQjKA2g4A2JagCd3p32yX3vHj/vV+r1h1h56b3u15t3/u67/3dd/7us1v/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7sA",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  purposeCharity: {
    src: "/images/purpose-charity.webp",
    alt: "Official handover of ₹1.20 crore marathon donation cheque to the Director of the Institute of Child Health and Hospital",
    objectPosition: "center 35%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAQCdASoQAAoAPxFysFQuJycisAsgoA2JaQCdV4AAG23n128/fU3a/n46zW7+fT99Tdr+fT99Tdr+fTrNfv59P31N2v59P31N2v59Os1+/n0/fU3a/n0/fU3a/n06zX7+fT99AA==",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  purposeInclusivity: {
    src: "/images/purpose-inclusivity.webp",
    alt: "Aerial view of marathon participants and disciplined marching contingents proceeding along the race route",
    objectPosition: "center 45%",
    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAQCdASoQAAkAPxFysFQuJycjsA2g4A1JaQDce/8h55Pz3P5113Xf+67rv/dd13/uu67/3Xdd/7ruu/913Xf+67rv/dd13/uu67/3AAA=",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },

  // Historical Journey Editions
  journey2020: {
    src: "/images/journey-2020.webp",
    alt: "Inaugural launch ceremony of the Kalaignar Memorial International Virtual Marathon on August 6, 2020",
    objectPosition: "center 30%",
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoQAAkAPxFyr1QuJyQjsA1A4A2JaQDdV245jWfG8h1d5X+59L1n2qf377TfM9qf0N8z2p/Q3qf0N6n9Dem/M9qf0N8z2p/Q3qf0N6n9Dem/M9qf0N8z2p/Q3qf0N6n9Dem/AA==",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  journey2021: {
    src: "/images/journey-2021.webp",
    alt: "Presentation of the Asia Book of Records certificate for the 2021 Virtual Marathon to Chief Minister M.K. Stalin",
    objectPosition: "center 25%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAQCdASoQAAoAPxFysFQuJycjsAsgoA2JaQCd+3L6WcO1yN32wV2+3n76m7X8/HWa3fz6fvqbtfz6fTrNfv59P31N2v59P31N2v59Os1+/n0/fU3a/n0/fU3a/n06zX7+fT99AA==",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  journey2022: {
    src: "/images/journey-2022.webp",
    alt: "Aerial panorama of 43,000+ runners filling the tree-shaded avenue from Besant Nagar at the first in-person edition",
    objectPosition: "center 40%",
    blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFYAAAAwAQCdASoQAAkAPxFyr1QuJycjsA2g4A1JaQDd1/735zWfO24tG0b2w//vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp9X/vQ9Pq/96Hp/AA",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw",
  },
  journey2023: {
    src: "/images/journey-2023.webp",
    alt: "Guinness World Record adjudicator officially presenting the world record certificate for Largest Running Race Series on stage",
    objectPosition: "center 25%",
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACwAQCdASoQAAoAPxFyr1QuJycisA2g4A2JaQDd/oK27Y1rN41P5x91/Pn1P5x91vP31P1P5x91vP1P5x91vP31P1P5x91vP1P5x91vP31P1P5x91vP1P5x91vP3wA=",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 60vw",
  },

  // Marathon City Showcase
  cityMarina: {
    src: "/images/city-marina.webp",
    alt: "Aerial view of marathon runners advancing along Kamarajar Salai with Chennai coastal skyline and tree canopy",
    objectPosition: "center 50%",
    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAQCdASoQAAkAPxFysFQuJycjsA2g4A1JaQDcf9b22WwYgT73+5W8V3/u67/3Xdd/7ruu/913Xf+67rv/dd13/uu67/3Xdd/7ruu/913XAAA=",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },

  // Inclusivity Showcase
  inclusivityParticipants: {
    src: "/images/inclusivity-participants.webp",
    alt: "Diverse marathon participants surging across the start line timing mat under floodlights at dawn",
    objectPosition: "center 40%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAQCdASoQAAoAPxF2slQuJyQjsAsgoA2JaQCd+3L6b0O1yN32wV2+3n76m7X8/HWa3fz6fvqbtfz6fTrNfv59P31N2v59P31N2v59Os1+/n0/fU3a/n0/fU3a/n06zX7+fT99AA==",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },

  // Partner With Us Section
  partnerCivic: {
    src: "/images/partner-civic.webp",
    alt: "Civic leaders and state representatives flagging off marathon participants from the stage",
    objectPosition: "center 25%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAQCdASoQAAoAPxF2rlQuJycjsA2g4A2JagCd3p32yX3vHj/vV+r1h1h56b3u15t3/u67/3dd/7us1v/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7sA",
    sizes: "280px",
  },
  partnerBranding: {
    src: "/images/partner-branding.webp",
    alt: "Runners passing the branded starting arch and sponsor banners during the dawn race start",
    objectPosition: "left 40%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAQCdASoQAAoAPxF2rlQuJycjsA2g4A2JagCd3p32yX3vHj/vV+r1h1h56b3u15t3/u67/3dd/7us1v/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7uu/93Xf+7rv/d13/u67/3dd/7sA",
    sizes: "280px",
  },
  partnerMedical: {
    src: "/images/partner-medical.webp",
    alt: "Event grounds setup with 108 emergency ambulance medical station, volunteer aid tents, and runner amenities",
    objectPosition: "right 25%",
    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAQCdASoQAAkAPxFysFQuJycjsA2g4A1JaQDcf9b22WwYgT73+5W8V3/u67/3Xdd/7ruu/913Xf+67rv/dd13/uu67/3Xdd/7ruu/913XAAA=",
    sizes: "280px",
  },
  partnerSpectators: {
    src: "/images/partner-spectators.webp",
    alt: "Smiling community participants and runners wearing yellow event shirts waving at the start",
    objectPosition: "center 35%",
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADQAQCdASoQAAoAPxFysVOvJyQjKA2g4A2JagDd3e+jK+lP486jQ5L2iM0VpL/e815q34V+K34V+K2+K34V+K34V+K2+K34V+K34V+K2+K34V+K2+K34V+K2+K34V+K2+AA==",
    sizes: "280px",
  },

  // Record Bodies Official Logos
  recordGuinness: {
    src: "/images/logo-guinness.svg",
    alt: "Guinness World Records official seal",
    objectPosition: "center",
    sizes: "200px",
  },
  recordAsiaBook: {
    src: "/images/logo-abr.webp",
    alt: "Asia Book of Records official seal",
    objectPosition: "center",
    sizes: "200px",
  },
  recordWorldRecordsUnion: {
    src: "/images/logo-wru.webp",
    alt: "World Records Union official seal",
    objectPosition: "center",
    sizes: "200px",
  },
} as const;
