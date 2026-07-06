export const DYNAMIC_HERO_IMAGES: Record<string, () => Promise<{ default: { src: string } }>> = {
  "digital-marketing-for-tradie": () => import("@/assets/industries/tradie.webp"),
  "digital-marketing-for-dentists": () => import("@/assets/industries/dentists.webp"),
  "digital-marketing-for-doctor": () => import("@/assets/industries/doctor.webp"),
  "digital-marketing-for-financial-services": () =>
    import("@/assets/industries/financial-services.webp"),
  "digital-marketing-for-fitness": () => import("@/assets/industries/fitness.webp"),
  "digital-marketing-for-law-firms": () => import("@/assets/industries/law-firms.webp"),
  "digital-marketing-for-non-profits": () => import("@/assets/industries/non-profits.webp"),
  "digital-marketing-for-professional-services": () =>
    import("@/assets/industries/professional-services.webp"),
  "digital-marketing-for-real-estates": () => import("@/assets/industries/real-estates.webp"),
  "digital-marketing-for-restaurant": () => import("@/assets/industries/restaurant.webp"),
  "digital-marketing-for-small-businesses": () =>
    import("@/assets/industries/small-businesses.webp"),
  "digital-marketing-for-beauty-skincare": () => import("@/assets/industries/beauty-skincare.webp"),
};
