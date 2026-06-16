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
    image: '/uniform-pics/IMG_4536.jpeg',
    alt: 'Geoff and Kylie of KAGE Services in front of the company van',
  },
  about: {
    eyebrow: 'Our Heritage',
    title: 'Meticulous Craftsmanship Since Day One',
    image: '/uniform-pics/IMG_4516.jpeg',
    alt: 'Geoff and Kylie, the team behind KAGE Services',
    yearsExperience: '20+',
    body: [
      'With more than two decades of experience, KAGE Services delivers exceptional plastering solutions for residential, commercial, and insurance projects.',
      'Specialising in all facets of the trade, our team of skilled plasterers handles every job with precision, from standard repairs to intricate ornamental cornice work.',
      'We pride ourselves on meticulous craftsmanship and a professional approach, ensuring every finish is seamless and stunning.',
      'KAGE Services is dedicated to providing high-quality, reliable plastering tailored to meet the unique needs of every client.',
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
    instagramUrl: 'https://www.instagram.com/kageservices/',
    items: [
      {
        image: '/carousel%20images/IMG_3017.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3100.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3260.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3274.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3307.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3655.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3657.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3661.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3730.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3941.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_3950.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_4063.jpeg',
        alt: 'KAGE Services project photo',
      },
      {
        image: '/carousel%20images/IMG_4235.jpeg',
        alt: 'KAGE Services project photo',
      },
    ] satisfies GalleryItem[],
  },
  testimonials: {
    eyebrow: 'Success Stories',
    title: 'What Our Clients Say',
    items: [
      {
        quote:
          "Geoff arrived 10 minutes early and sat politely in his vehicle till 7am, should of come in for a coffee! My insurer recommended KAGE for our ceiling repair. They arrived when they said they would arrive and completed the work quickly and effectively. Geoff is a lovely guy, easy to talk to and is more than happy to explain the work being carried out. Will be recommending KAGE Services in the future.",
        author: 'Andrew',
      },
      {
        quote:
          "We recently had Geoff from KAGE Services complete plastering work at our property in Burpengary, and we honestly couldn't be happier with the result. From start to finish, Geoff was an absolute pleasure to deal with — friendly, professional, and genuinely cares about the quality of his work. His plastering was flawless, and the attention to detail really shows in the finished product. It's not easy to find trades who take that level of pride in what they do. On top of that, his pricing was very fair, and everything was completed promptly without cutting any corners. The whole process was smooth and stress-free, which is exactly what you want when doing renovations. We'll definitely be using Geoff again in the future and wouldn't hesitate to recommend him to anyone looking for a reliable, high-quality plasterer. Thanks again Geoff — fantastic job!",
        author: 'Kate',
      },
      {
        quote:
          'Repairs to bathroom after Alfred. Good job. Recommend KAGE in Brisbane.',
        author: 'Cica',
      },
      {
        quote:
          'KAGE recently completed repairs to our kitchen ceiling caused by a faulty air-conditioning unit. Geoff completed the job in two days which required cutting out and replacing the affected area. I was amazed at the quality of the work done and it is impossible to see where the repair was done. Highly recommend KAGE.',
        author: 'Ken',
      },
      {
        quote:
          'Wonderful communication and coordination to have our plastering works completed. Was quick to have the works completed and executed well.',
        author: 'Vanessa',
      },
      {
        quote:
          'The communication from the team through our recent renovations was wonderful, they were efficient and the final product was perfect. Thank you again.',
        author: 'Kate',
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
    facebook: 'https://www.facebook.com/people/Kage-Services',
    instagram: 'https://www.instagram.com/kageservices/',
  },
} as const;
