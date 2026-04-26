export type NavItem = {
  href: string;
  label: string;
};

export type ServiceCard = {
  title: string;
  icon: string;
};

export type Area = {
  name: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export const siteContent = {
  seo: {
    title: 'KAGE Services | Masterful Drywall & Plastering',
    description:
      'KAGE Services delivers premium drywall, plastering, ceilings, repairs, and specialty finishes across South East Queensland with precision, communication, and craftsmanship.',
    siteUrl: '',
    ogImage: '/og-image.svg',
  },
  company: {
    name: 'KAGE Services',
    legalName: 'KAGE Services Pty Ltd.',
    tagline: 'Masterful Finishes',
    heroHeadline: 'Precision in Every Surface.',
    heroBody:
      'We pride ourselves on delivering high-quality work, clear communication, friendly service, and expert guidance.',
    footerSummary:
      'Masterful drywall and plastering for South East Queensland. Excellence in every layer.',
    logo: {
      src: '/logo-wide.png',
      alt: 'KAGE Services logo',
    },
  },
  navigation: [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#service-areas', label: 'Service Areas' },
    { href: '#gallery', label: 'Gallery' },
  ] satisfies NavItem[],
  hero: {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgL68WgmZiz-qNrv19YHOEbSEFy46au0cPV2lWBTvko0tWOfW1uxKd8fh8P8ZiN_Vli9iVAK1LKAzyaBkd80CS-KVAiyeNnSYh9Zy-Ix-OBclM73boz4yh_KM7XbwzVH6ey2zQY7UFkWotXsNIf0eOARQqKqucX1sDwa_kM-NbEpbBochjXHdlNKAooO8bfzcFfwYpwB9pMSJbGdxKKyBBS94vJdmEydk2WsrzIQ-6oGcg63ARlJxWGp8qZPq5e27wrE-IcGBgy7GE',
    alt: 'Clean drywall finish',
    primaryCta: {
      href: '#contact',
      label: 'Request A Free Quote',
    },
    secondaryCta: {
      href: '#services',
      label: 'Our Services',
    },
  },
  about: {
    eyebrow: 'Our Heritage',
    title: 'Meticulous Craftsmanship Since Day One',
    image: '/carousel%20images/IMG_3274.jpeg',
    alt: 'KAGE Services residential craftsmanship',
    yearsExperience: '20+',
    body: [
      "With over 20 years of dedicated experience, KAGE Services has built a reputation for excellence that literally stands the test of time. We believe a wall is more than just a partition. It's the canvas of your home.",
      'Our meticulous approach ensures every joint is seamless, every corner is crisp, and every finish is smooth as glass.',
    ],
    credentials: [
      { label: 'QBCC', value: '15570544' },
      { label: 'ABN', value: '76 689 362 865' },
      { label: 'Satisfaction', value: '100%' },
    ],
  },
  services: {
    eyebrow: 'Expertise',
    title: 'Specialized Drywall Solutions',
    body:
      'From residential builds to complex commercial infrastructure, we provide precision-driven drywall services for every requirement.',
    cards: [
      { title: 'New Homes', icon: 'home_work' },
      { title: 'Renovations', icon: 'construction' },
      { title: 'Maintenance Repairs', icon: 'build' },
      { title: 'Insurance Work', icon: 'verified' },
      { title: 'Office Partitions', icon: 'domain' },
      { title: 'Wet Areas', icon: 'water_drop' },
      { title: 'Ceilings', icon: 'architecture' },
      { title: 'Walls', icon: 'layers' },
      { title: 'Cornice', icon: 'view_agenda' },
      { title: 'Ornamental Cornice', icon: 'auto_awesome' },
      { title: 'Water Damage Repairs', icon: 'plumbing' },
      { title: 'Creative Wall Design', icon: 'brush' },
      { title: 'Laser Precision', icon: 'adjust' },
      { title: 'Stud & Track', icon: 'grid_view' },
      { title: 'Suspended Ceilings', icon: 'space_dashboard' },
      { title: 'Exposed Grid', icon: 'grid_on' },
      { title: 'Acoustic Ceilings', icon: 'volume_off' },
      { title: 'Sound Rated Walls', icon: 'hearing_disabled' },
      { title: 'Shadow Line', icon: 'linear_scale' },
      { title: 'Square Set', icon: 'check_box_outline_blank' },
    ] satisfies ServiceCard[],
  },
  serviceAreas: {
    eyebrow: 'Coverage',
    title: 'Our Service Areas',
    body:
      'Masterful drywall services across South East Queensland. Our team is fully mobile and ready to assist in:',
    image: '/kage_services_service_area_map.png',
    alt: 'Coverage map for South East Queensland service areas',
    areas: [
      { name: 'Brisbane' },
      { name: 'Redcliffe' },
      { name: 'Moreton Bay' },
      { name: 'Gympie' },
      { name: 'Redland Bay' },
      { name: 'Ipswich' },
      { name: 'Fraser Coast' },
      { name: 'Sunshine Coast' },
      { name: 'Gold Coast' },
      { name: 'Bundaberg' },
      { name: 'Outside these areas?' },
    ] satisfies Area[],
  },
  gallery: {
    eyebrow: 'Our Work',
    title: 'Project Showcase',
    instagramUrl: 'https://www.instagram.com/kage_services/',
    instagramHandle: '@kage_services',
    items: [
      {
        title: 'Detailed Interior Finish',
        image: '/carousel%20images/IMG_3017.jpeg',
        alt: 'KAGE Services detailed interior finish',
      },
      {
        title: 'Precision Ceiling Work',
        image: '/carousel%20images/IMG_3100.jpeg',
        alt: 'KAGE Services precision ceiling work',
      },
      {
        title: 'Custom Wall Installation',
        image: '/carousel%20images/IMG_3260.jpeg',
        alt: 'KAGE Services custom wall installation',
      },
      {
        title: 'Residential Craftsmanship',
        image: '/carousel%20images/IMG_3274.jpeg',
        alt: 'KAGE Services residential craftsmanship',
      },
      {
        title: 'Signature Ceiling Lines',
        image: '/carousel%20images/IMG_3307.jpeg',
        alt: 'KAGE Services signature ceiling lines',
      },
      {
        title: 'Smooth Surface Detailing',
        image: '/carousel%20images/IMG_3655.jpeg',
        alt: 'KAGE Services smooth surface detailing',
      },
      {
        title: 'Clean Modern Interior',
        image: '/carousel%20images/IMG_3657.jpeg',
        alt: 'KAGE Services clean modern interior finish',
      },
      {
        title: 'Feature Wall Finish',
        image: '/carousel%20images/IMG_3661.jpeg',
        alt: 'KAGE Services feature wall finish',
      },
      {
        title: 'Project Delivery',
        image: '/carousel%20images/IMG_3730.jpeg',
        alt: 'KAGE Services completed project detail',
      },
      {
        title: 'Refined Repair Work',
        image: '/carousel%20images/IMG_3941.jpeg',
        alt: 'KAGE Services refined repair work',
      },
      {
        title: 'Commercial Interior Detail',
        image: '/carousel%20images/IMG_3950.jpeg',
        alt: 'KAGE Services commercial interior detail',
      },
      {
        title: 'Crisp Finishing Work',
        image: '/carousel%20images/IMG_4063.jpeg',
        alt: 'KAGE Services crisp finishing work',
      },
      {
        title: 'Completed Interior Build',
        image: '/carousel%20images/IMG_4235.jpeg',
        alt: 'KAGE Services completed interior build',
      },
    ] satisfies GalleryItem[],
  },
  testimonials: {
    eyebrow: 'Success Stories',
    title: 'What Our Clients Say',
    items: [
      {
        quote:
          'Exceptional attention to detail. The finish on our new home is absolutely flawless. Highly recommend KAGE for any high-end project.',
        author: 'Predrag',
      },
      {
        quote:
          'Professional and clean. They worked around our renovation schedule and left the place spotless every day.',
        author: 'Maureen',
      },
      {
        quote:
          'The communication was wonderful, they were efficient and the final product was perfect.',
        author: 'Kate & Vanessa',
      },
    ] satisfies Testimonial[],
  },
  contact: {
    eyebrow: 'Free Quote',
    title: 'Start Your Project',
    body:
      "Let's build something exceptional together. Our team is ready to provide expert guidance and a free quote.",
    email: 'admin@kageservices.com.au',
    phoneNumbers: [
      { label: 'Geoff', value: '0481 202 873', href: 'tel:+61481202873' },
      { label: 'Kylie', value: '0419 893 377', href: 'tel:+61419893377' },
    ],
    formspreeEndpoint: 'https://formspree.io/f/mwvwnzkw',
    serviceOptions: [
      'New Home Installation',
      'Renovation/Patching',
      'Insurance Claim Work',
      'Cornice/Specialty',
    ],
  },
  compliance: {
    abn: '76 689 362 865',
    qbcc: '15570544',
  },
  socials: {
    facebook: 'https://www.facebook.com/kageservices',
    instagram: 'https://www.instagram.com/kage_services/',
  },
} as const;
