/**
 * Kalaignar Memorial International Marathon - Master Content
 * All copy lives here for single-point editing and maintenance.
 * NOTE: Strictly follows historical facts. No future venues, dates, or prices.
 */

import { siteImages } from "./images";
export { siteImages };

export interface NavLink {
  label: string;
  href: string;
}

export interface EditionInfo {
  year: string;
  tag: string;
  badge: string;
  title: string;
  periodOrDate: string;
  routeLocation: string;
  runners: string;
  record: string;
  fundsRaised: string;
  impactDetails: string;
  categories?: string;
  prizeMoney?: string;
  imageLabel: string;
}

export interface PillarCard {
  id: string;
  title: string;
  barColor: "black" | "purple" | "blue";
  barColorClass: string;
  tagline: string;
  description: string;
  imageLabel: string;
  heightClass: string;
}

export interface ImpactStat {
  value: number;
  prefix?: string;
  suffix?: string;
  isNumeric: boolean;
  displayOverride?: string;
  label: string;
  sublabel: string;
}

export const siteContent = {
  brand: {
    name: "Kalaignar Memorial International Marathon",
    shortName: "Kalaignar Marathon",
    motto: "RUN FOR HEALTH • RUN FOR HUMANITY",
    visionStatement:
      "To preserve the legacy of Kalaignar through a global running movement that promotes health, fitness, social responsibility and unity, while positioning Tamil Nadu as a leading destination for international marathon events.",
    yearEst: "2020",
    wordmark: "KALAIGNAR MARATHON",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Impact", href: "#impact" },
    { label: "Partner With Us", href: "#partner" },
  ] as NavLink[],

  hero: {
    motto: "RUN FOR HEALTH • RUN FOR HUMANITY",
    badgeStack: {
      count: "73,000+",
      text: "registered runners in our latest edition",
    },
    latestEditionCard: {
      badge: "Latest Edition",
      title: "4th Edition (Centenary)",
      date: "Aug 6, 2023",
      location: "Kamarajar Salai, Marina Beach, Chennai",
      thumbnailLabel: "Centenary edition highlight, 400×300",
    },
    headline: "Run for a Cause. Run for Everyone.",
    subparagraph:
      "Since 2020, the Kalaignar Memorial International Marathon has grown from a virtual fundraiser into a Guinness World Record-holding running event, with every rupee of registration fees going to public health.",
    ctaText: "Registration Coming Soon",
    bgPlaceholderLabel: "Hero photo: runners at the marathon, 1920×1080",
  },

  statement: {
    quote:
      "Running isn't only about distance or speed. It's about remembering, giving back, and bringing people together. Every step we take funds care for those who need it most.",
    leftPhoto: {
      label: "Runners community & spirit, 800×600",
      alt: "Community spirit at the marathon",
    },
    rightPhoto: {
      label: "Marina beach sunrise finish line, 800×600",
      alt: "Finish line on the Marina beachfront",
    },
  },

  about: {
    eyebrow: "Built on Purpose",
    title: "More than a race, a movement that began in 2020.",
    subtitle:
      "A living legacy combining athletic excellence with direct public health welfare and radical inclusivity.",
    pillars: [
      {
        id: "commemoration",
        title: "Commemoration",
        barColor: "black",
        barColorClass: "bg-[#111111] text-white",
        tagline: "Honouring Legacy",
        description:
          "Held annually around August 7 to honour the legacy of M. Karunanidhi (Kalaignar), former Chief Minister of Tamil Nadu.",
        imageLabel: "Commemoration & legacy photo, 600×800",
        heightClass: "h-[440px] md:h-[480px]",
      },
      {
        id: "charity",
        title: "Charity",
        barColor: "purple",
        barColorClass: "bg-[#7C3AED] text-white",
        tagline: "100% For Public Health",
        description:
          "100% of registration fees go to public health causes: government relief funds and public hospital infrastructure.",
        imageLabel: "Public health & hospital impact photo, 600×800",
        heightClass: "h-[490px] md:h-[540px]",
      },
      {
        id: "inclusivity",
        title: "Inclusivity",
        barColor: "blue",
        barColorClass: "bg-[#2563EB] text-white",
        tagline: "Equal Dignity for All",
        description:
          "Entry fees waived or subsidised for transgender runners, persons with disabilities and uniformed service personnel.",
        imageLabel: "Inclusive runner community photo, 600×800",
        heightClass: "h-[450px] md:h-[500px]",
      },
    ] as PillarCard[],
  },

  journey: {
    eyebrow: "Our Journey",
    title: "Four Editions. One Mission.",
    subtitle:
      "From an international virtual fundraiser during the pandemic to the Guinness World Record-holding running race series on the Marina beachfront.",
    editions: [
      {
        year: "2020",
        tag: "Inaugural Edition",
        badge: "Virtual Run",
        title: "1st Edition — Virtual Debut",
        periodOrDate: "2020",
        routeLocation: "Global Virtual Run (COVID-19 Pandemic)",
        runners: "8,549 runners",
        record: "Asia Book of Records: Largest International Virtual Marathon",
        fundsRaised: "₹23.4 Lakh",
        impactDetails:
          "Launched during the COVID-19 pandemic as an international virtual run. 8,549 runners from 28 countries united to raise ₹23.4 lakh for the Tamil Nadu Chief Minister's COVID-19 Relief Fund.",
        imageLabel: "2020 Virtual marathon edition photo, 800×600",
      },
      {
        year: "2021",
        tag: "2nd Edition",
        badge: "Virtual Run",
        title: "2nd Edition — Global Expansion",
        periodOrDate: "Aug 7–31, 2021",
        routeLocation: "Global Virtual Run across 37 Countries",
        runners: "About 19,500 runners",
        record:
          "World Records Union: Maximum Participants in an International Virtual Marathon",
        fundsRaised: "₹56 Lakh",
        impactDetails:
          "About 19,500 runners joined from 37 countries across the world, setting a World Records Union record and raising ₹56 lakh for COVID-19 relief.",
        imageLabel: "2021 Worldwide virtual runners photo, 800×600",
      },
      {
        year: "2022",
        tag: "3rd Edition",
        badge: "First In-Person",
        title: "3rd Edition — Onto the Streets of Chennai",
        periodOrDate: "Aug 7, 2022",
        routeLocation: "Besant Nagar to Marina Beach, Chennai",
        runners: "43,231 runners",
        categories: "5K / 10K / Half Marathon / Full Marathon",
        record: "Asia Book of Records: Largest Memorial Marathon in Asia",
        fundsRaised: "₹1.22 Crore",
        impactDetails:
          "First in-person edition running from Besant Nagar to Marina Beach. ₹1.22 crore raised supported a dedicated shelter for parents of inpatient children at the Institute of Child Health, Egmore.",
        imageLabel: "2022 In-person marathon Marina route photo, 800×600",
      },
      {
        year: "2023",
        tag: "4th Edition",
        badge: "Guinness Record",
        title: "Centenary Edition — A Global Benchmark",
        periodOrDate: "Aug 6, 2023",
        routeLocation: "Kamarajar Salai, Marina Beachfront, Chennai",
        runners: "73,206 registered runners",
        categories: "9 competitive & community categories",
        prizeMoney: "₹10.7 Lakh total prize money",
        record: "Guinness World Record: Largest Running Race Series",
        fundsRaised: "₹3.42 Crore",
        impactDetails:
          "73,206 registered runners created history on the iconic Marina beachfront. Awarded the Guinness World Record for the Largest Running Race Series, raising ₹3.42 crore for a dedicated cancer treatment centre at Royapettah Government Hospital.",
        imageLabel: "2023 Centenary Guinness World Record photo, 1200×800",
      },
    ] as EditionInfo[],
  },

  impactStrip: {
    eyebrow: "Measured Impact",
    title: "Proof in Numbers",
    stats: [
      {
        value: 73206,
        isNumeric: true,
        suffix: "",
        label: "Registered Runners",
        sublabel: "2023 Centenary Edition",
      },
      {
        value: 3.42,
        isNumeric: false,
        displayOverride: "₹3.42 Cr",
        label: "Raised in 2023",
        sublabel: "For Royapettah Cancer Centre",
      },
      {
        value: 100,
        isNumeric: true,
        suffix: "%",
        label: "Fees Donated",
        sublabel: "To Public Health Causes",
      },
      {
        value: 1,
        isNumeric: false,
        displayOverride: "Guinness",
        suffix: "Record",
        label: "World Record Holder",
        sublabel: "Largest Running Race Series",
      },
    ] as ImpactStat[],
    recognisedByTitle: "Recognised and Ratified By",
    recordBodies: [
      {
        name: "Guinness World Records",
        recordTitle: "Largest Running Race Series",
        placeholderLabel: "Guinness World Records official seal placeholder, 240×120",
      },
      {
        name: "Asia Book of Records",
        recordTitle: "Largest Memorial Marathon in Asia",
        placeholderLabel: "Asia Book of Records seal placeholder, 240×120",
      },
      {
        name: "World Records Union",
        recordTitle: "Maximum Participants in an International Virtual Marathon",
        placeholderLabel: "World Records Union seal placeholder, 240×120",
      },
    ],
  },

  inclusivity: {
    eyebrow: "Participation Breakdown",
    title: "A Race Open to All",
    description:
      "True athleticism and civic pride belong to every citizen. The Kalaignar Memorial International Marathon was envisioned not just as a sporting challenge, but as an equitable civic gathering that dismantles barriers to participation. Through institutional subsidies, fee waivers, and community encouragement, we ensure every runner can stand proud on the starting line.",
    highlight:
      "1,500+ Indian Army and Coast Guard personnel and about 500 government officials took part.",
    stats: [
      {
        number: "50,629",
        category: "Men",
        detail: "Runners from across all age groups and backgrounds",
      },
      {
        number: "21,514",
        category: "Women",
        detail: "Historic participation across 5K, 10K, Half, and Full distances",
      },
      {
        number: "1,063",
        category: "Transgender Runners",
        detail:
          "Each received a ₹1,000 cash incentive from the DMK Youth Wing in celebration of dignity and sporting inclusion",
      },
    ],
    photo: {
      label: "Participants photo, 1200×800",
      alt: "Diverse runners taking part at the Marina beachfront",
    },
  },

  partnerWithUs: {
    eyebrow: "Partner With Us",
    title: "Let's Build the Next Chapter Together.",
    subtitle:
      "We welcome conversations with authorities, sponsors and community partners who share our belief in running for a cause.",
    photoPlaceholders: [
      {
        id: "p1",
        label: "Partner & civic leadership presence, 600×500",
        tilt: -8,
        position: "top-left",
      },
      {
        id: "p2",
        label: "Corporate sponsors & route branding, 600×500",
        tilt: 7,
        position: "top-right",
      },
      {
        id: "p3",
        label: "Medical team & volunteer aid stations, 600×500",
        tilt: 6,
        position: "bottom-left",
      },
      {
        id: "p4",
        label: "Cheering spectators & community spirit, 600×500",
        tilt: -7,
        position: "bottom-right",
      },
    ],
    form: {
      title: "Inquire or Propose a Partnership",
      namePlaceholder: "Full Name",
      orgPlaceholder: "Organisation / Institution / Sponsor",
      emailPlaceholder: "Official Email Address",
      messagePlaceholder:
        "Tell us about your organisation and how you'd like to collaborate or support our public health mission...",
      submitBtnText: "Send Message",
      successMessage:
        "Thank you for reaching out. Our team has received your message and will be in touch shortly.",
    },
    notifyBox: {
      title: "Stay Informed",
      badge: "Registrations Coming Soon",
      description:
        "Receive official notices when general registration dates and event details are announced.",
      emailPlaceholder: "Enter your email",
      btnText: "Notify Me",
      successMessage:
        "You are subscribed! We will notify you when registrations open.",
    },
  },

  footer: {
    aboutBlurb:
      "The Kalaignar Memorial International Marathon is a Guinness World Record-holding event uniting runners across the world in support of public healthcare and social inclusion.",
    linksPages: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Journey", href: "#journey" },
      { label: "Impact", href: "#impact" },
      { label: "Partner With Us", href: "#partner" },
    ],
    linksReference: [
      { label: "Press & Media", href: "#" },
      { label: "Partner Network", href: "#partner" },
      { label: "Medical & Health Beneficiaries", href: "#about" },
      { label: "Event FAQ", href: "#" },
    ],
    newsletter: {
      heading: "Official Updates",
      subtext: "Receive official announcements and press communications.",
      placeholder: "Your email address",
    },
    socials: [
      { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
      { name: "X", href: "https://x.com", iconName: "Twitter" },
      { name: "YouTube", href: "https://youtube.com", iconName: "Youtube" },
      { name: "Facebook", href: "https://facebook.com", iconName: "Facebook" },
    ],
    wordmark: "KALAIGNAR MARATHON",
    copyright:
      "© 2020–2026 Kalaignar Memorial International Marathon. All rights reserved.",
    disclaimer:
      "All registration fees are 100% directed towards public health infrastructure and government relief funds.",
    credits: {
      label: "Built by",
      company: "Flowverse Tech OPC Pvt. Ltd.",
      url: "https://flowverse-tech.com",
      displayUrl: "flowverse-tech.com",
    },
  },

  images: siteImages,
} as const;
