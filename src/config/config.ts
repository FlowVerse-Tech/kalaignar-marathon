/**
 * Kalaignar Memorial International Marathon
 * Global Site Configuration
 *
 * Registration switch:
 * Toggle `registrationOpen` to true and provide `registrationUrl`
 * when registration opens. All CTA buttons throughout the site
 * automatically update.
 */
export const siteConfig = {
  name: "Kalaignar Memorial International Marathon",
  shortName: "Kalaignar Marathon",
  tagline: "Run for a Cause. Run for Everyone.",
  description:
    "Guinness World Record-holding memorial international marathon dedicated to public health, inclusivity, and community impact since 2020.",
  url: "https://kalaignarmarathon.org",

  // 4b. Registration Switch
  registrationOpen: false,
  registrationUrl: "",
  registrationComingSoonTooltip: "Registrations opening soon",

  contactEmail: "contact@kalaignarmarathon.org",
} as const;
