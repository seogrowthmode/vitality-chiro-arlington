const BASE_URL = "https://vitalitychiroarlington.com";

const BUSINESS = {
  name: "Vitality Family Chiropractic",
  phone: "(817) 962-0182",
  street: "1106 W. Pioneer Parkway",
  suite: "Suite 300",
  city: "Arlington",
  state: "TX",
  zip: "76013",
  lat: 32.7157,
  lng: -97.1088,
  url: BASE_URL,
  priceRange: "$$",
};

const AREAS_SERVED = [
  "Arlington",
  "Mansfield",
  "Grand Prairie",
  "Fort Worth",
  "Kennedale",
  "Pantego",
  "Dalworthington Gardens",
];

const PHYSICIANS = [
  {
    name: "Dr. Elise Hernandez",
    jobTitle: "Chiropractor, Founder",
    description:
      "Founder of Vitality Family Chiropractic. Specializes in prenatal and pediatric chiropractic care.",
  },
  {
    name: "Dr. Mary Davis",
    jobTitle: "Chiropractor",
    description:
      "Specializes in prenatal and pediatric chiropractic care at Vitality Family Chiropractic.",
  },
  {
    name: "Dr. Chad London",
    jobTitle: "Chiropractor, Certified Chiropractic Sports Physician (CCSP)",
    description:
      "Certified Chiropractic Sports Physician specializing in sports chiropractic at Vitality Family Chiropractic.",
  },
];

const SERVICES_OFFERED = [
  "Chiropractic Adjustments",
  "Prenatal Chiropractic",
  "Pediatric Chiropractic",
  "Sports Chiropractic",
  "Advanced Spinal Correction",
  "Family Chiropractic",
  "MaxLiving 5 Essentials",
  "sEMG Nerve Scan",
  "Spinal X-rays",
  "Orthopedic Testing",
  "Metabolix Testing",
];

// Mon: 7:30-10:30,15:00-18:00
// Tue: 11:00-14:00
// Wed: 7:30-10:30,15:00-18:00
// Thu: 15:00-18:00
// Fri: 7:00-10:00
// Sat: 8:00-9:30
const OPENING_HOURS = [
  "Mo 07:30-10:30",
  "Mo 15:00-18:00",
  "Tu 11:00-14:00",
  "We 07:30-10:30",
  "We 15:00-18:00",
  "Th 15:00-18:00",
  "Fr 07:00-10:00",
  "Sa 08:00-09:30",
];

function buildAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.street}, ${BUSINESS.suite}`,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "US",
  };
}

function buildGeo() {
  return {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.lat,
    longitude: BUSINESS.lng,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": `${BASE_URL}/#chiropractor`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    address: buildAddress(),
    geo: buildGeo(),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "07:30", closes: "10:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "15:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "14:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "07:30", closes: "10:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "15:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "10:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "09:30" },
    ],
    priceRange: BUSINESS.priceRange,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: AREAS_SERVED.map((city) => ({
      "@type": "City",
      name: city,
    })),
    employee: PHYSICIANS.map((doc) => ({
      "@type": "Physician",
      name: doc.name,
      jobTitle: doc.jobTitle,
      description: doc.description,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chiropractic Services",
      itemListElement: SERVICES_OFFERED.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: svc,
        },
      })),
    },
    image: `${BASE_URL}/images/hero.jpg`,
    description:
      "Vitality Family Chiropractic in Arlington TX offers corrective chiropractic care for families, pregnant mothers, children, and athletes. 3 doctors. MaxLiving affiliated. Se Habla Espanol.",
  };
}

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${BASE_URL}/#medicalbusiness`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    address: buildAddress(),
    geo: buildGeo(),
    medicalSpecialty: "Chiropractic",
    openingHours: OPENING_HOURS,
    priceRange: BUSINESS.priceRange,
    isAcceptingNewPatients: true,
  };
}

export function organizationSchema(socialLinks?: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    address: buildAddress(),
    logo: `${BASE_URL}/images/logo.png`,
    sameAs: socialLinks ?? [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      "@type": "Chiropractor",
      "@id": `${BASE_URL}/#chiropractor`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    availableService: {
      "@type": "MedicalTherapy",
      name: service.name,
    },
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
