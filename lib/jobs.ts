import type { Lang } from './i18n'

export interface Job {
  slug: string
  title: { en: string; nl: string }
  city: string
  schedule: { en: string; nl: string }
  company: string
  description: { en: string; nl: string }
  chips: { en: string[]; nl: string[] }
}

export const JOBS: Job[] = [
  {
    slug: 'warehouse-orderpicker-rotterdam',
    title: { en: 'Warehouse Orderpicker', nl: 'Magazijnmedewerker' },
    city: 'Rotterdam',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'Logistics Co.',
    description: {
      en: 'Pick and pack orders in a modern warehouse environment. No experience required.',
      nl: 'Orders verzamelen en inpakken in een moderne magazijnomgeving. Geen ervaring vereist.',
    },
    chips: {
      en: ['No Dutch required', 'Shifts'],
      nl: ['Geen Nederlands vereist', 'Diensten'],
    },
  },
  {
    slug: 'junior-it-support-den-haag',
    title: { en: 'Junior IT Support', nl: 'Junior IT-support' },
    city: 'Den Haag',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'TechHelp BV',
    description: {
      en: 'Help colleagues and clients with hardware and software issues. Basic IT knowledge needed.',
      nl: 'Collega\'s en klanten helpen met hardware- en softwareproblemen. Basiskennis IT vereist.',
    },
    chips: {
      en: ['Windows', 'Ticketing'],
      nl: ['Windows', 'Ticketing'],
    },
  },
  {
    slug: 'kitchen-assistant-amsterdam',
    title: { en: 'Kitchen Assistant', nl: 'Keukenassistent' },
    city: 'Amsterdam',
    schedule: { en: 'Flexible', nl: 'Flexibel' },
    company: 'FreshEats',
    description: {
      en: 'Support the kitchen team with prep work, cleaning and basic cooking tasks.',
      nl: 'Ondersteuning van het keukenteam bij voorbereidend werk, schoonmaak en basiskooktaken.',
    },
    chips: {
      en: ['Flexible hours', 'Entry level'],
      nl: ['Flexibele uren', 'Instapniveau'],
    },
  },
  {
    slug: 'cleaning-staff-utrecht',
    title: { en: 'Cleaning Staff', nl: 'Schoonmaakmedewerker' },
    city: 'Utrecht',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'CleanCo',
    description: {
      en: 'Office and facility cleaning in central Utrecht. Early morning or evening shifts.',
      nl: 'Kantoor- en faciliteitenschoonmaak in centraal Utrecht. Vroege ochtend- of avonddiensten.',
    },
    chips: {
      en: ['Shifts', 'Entry level'],
      nl: ['Diensten', 'Instapniveau'],
    },
  },
  {
    slug: 'delivery-driver-eindhoven',
    title: { en: 'Delivery Driver', nl: 'Bezorger' },
    city: 'Eindhoven',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'QuickDeliver',
    description: {
      en: 'Deliver packages to customers across Eindhoven and surrounding areas. Valid driver\'s license required.',
      nl: 'Pakketten bezorgen aan klanten in Eindhoven en omgeving. Geldig rijbewijs vereist.',
    },
    chips: {
      en: ['Driving license', 'Full-time'],
      nl: ['Rijbewijs', 'Voltijd'],
    },
  },
  {
    slug: 'customer-service-leiden',
    title: { en: 'Customer Service Assistant', nl: 'Klantenservicemedewerker' },
    city: 'Leiden',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'ShopMart',
    description: {
      en: 'Assist customers in-store and via phone. Good communication skills required.',
      nl: 'Klanten helpen in de winkel en via telefoon. Goede communicatieve vaardigheden vereist.',
    },
    chips: {
      en: ['Retail', 'Customer service'],
      nl: ['Retail', 'Klantenservice'],
    },
  },
  {
    slug: 'barista-haarlem',
    title: { en: 'Barista', nl: 'Barista' },
    city: 'Haarlem',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'CoffeeSpot',
    description: {
      en: 'Prepare coffee drinks and serve customers in a cosy café. Training provided.',
      nl: 'Koffiedranken bereiden en klanten bedienen in een gezellig café. Training wordt aangeboden.',
    },
    chips: {
      en: ['Hospitality', 'Entry level'],
      nl: ['Horeca', 'Instapniveau'],
    },
  },
  {
    slug: 'warehouse-packer-rotterdam',
    title: { en: 'Warehouse Packer', nl: 'Inpakker magazijn' },
    city: 'Rotterdam',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'FastShip',
    description: {
      en: 'Pack and label outgoing shipments efficiently in a fast-paced environment.',
      nl: 'Uitgaande zendingen efficiënt inpakken en labelen in een dynamische omgeving.',
    },
    chips: {
      en: ['Logistics', 'No Dutch required'],
      nl: ['Logistiek', 'Geen Nederlands vereist'],
    },
  },
  {
    slug: 'data-entry-clerk-amsterdam',
    title: { en: 'Data Entry Clerk', nl: 'Gegevensinvoermedewerker' },
    city: 'Amsterdam',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'DataPro BV',
    description: {
      en: 'Enter and verify data in company systems. Good attention to detail required.',
      nl: 'Gegevens invoeren en verifiëren in bedrijfssystemen. Nauwkeurigheid vereist.',
    },
    chips: {
      en: ['Computer skills', 'Office environment'],
      nl: ['Computervaardigheden', 'Kantooromgeving'],
    },
  },
  {
    slug: 'security-guard-rotterdam',
    title: { en: 'Security Guard', nl: 'Beveiliger' },
    city: 'Rotterdam',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'SecureNL',
    description: {
      en: 'Monitor premises and ensure safety at a logistics hub. Night shifts available.',
      nl: 'Bewaking van terreinen en veiligheid bij een logistiek knooppunt. Nachtdiensten beschikbaar.',
    },
    chips: {
      en: ['Security certificate', 'Night shifts'],
      nl: ['Beveiligingscertificaat', 'Nachtdiensten'],
    },
  },
  {
    slug: 'receptionist-den-haag',
    title: { en: 'Receptionist', nl: 'Receptioniste' },
    city: 'Den Haag',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'OfficeFirst',
    description: {
      en: 'Welcome visitors and handle incoming calls at a professional office.',
      nl: 'Bezoekers verwelkomen en telefoongesprekken afhandelen op een professioneel kantoor.',
    },
    chips: {
      en: ['Dutch B1+', 'Professional setting'],
      nl: ['Nederlands B1+', 'Professionele omgeving'],
    },
  },
  {
    slug: 'factory-worker-eindhoven',
    title: { en: 'Factory Worker', nl: 'Productiemedewerker' },
    city: 'Eindhoven',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'ManufactureNL',
    description: {
      en: 'Operate machinery and assist with production on a modern assembly line.',
      nl: 'Machines bedienen en assisteren bij productie op een moderne assemblagelijn.',
    },
    chips: {
      en: ['No experience needed', 'Rotating shifts'],
      nl: ['Geen ervaring nodig', 'Wisselende diensten'],
    },
  },
  {
    slug: 'bicycle-courier-amsterdam',
    title: { en: 'Bicycle Courier', nl: 'Fietskoerier' },
    city: 'Amsterdam',
    schedule: { en: 'Flexible', nl: 'Flexibel' },
    company: 'QuickBike',
    description: {
      en: 'Deliver parcels and food orders by bike across the city. Set your own hours.',
      nl: 'Pakketten en maaltijden bezorgen per fiets door de stad. Stel je eigen uren in.',
    },
    chips: {
      en: ['Own bicycle', 'Flexible hours'],
      nl: ['Eigen fiets', 'Flexibele uren'],
    },
  },
  {
    slug: 'childcare-assistant-haarlem',
    title: { en: 'Childcare Assistant', nl: 'Kinderbegeleider' },
    city: 'Haarlem',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'KinderPlus',
    description: {
      en: 'Support children aged 2–6 in daily activities at a licensed daycare centre.',
      nl: 'Kinderen van 2–6 jaar begeleiden bij dagelijkse activiteiten bij een erkend kinderdagverblijf.',
    },
    chips: {
      en: ['VOG required', 'Morning shifts'],
      nl: ['VOG vereist', 'Ochtendiensten'],
    },
  },
  {
    slug: 'supermarket-cashier-leiden',
    title: { en: 'Supermarket Cashier', nl: 'Kassamedewerker' },
    city: 'Leiden',
    schedule: { en: 'Part-time', nl: 'Deeltijd' },
    company: 'FreshMart',
    description: {
      en: 'Operate the checkout, assist customers, and keep shelves stocked.',
      nl: 'Kassa bedienen, klanten helpen en schappen bijvullen.',
    },
    chips: {
      en: ['Dutch A2+', 'Weekend shifts'],
      nl: ['Nederlands A2+', 'Weekenddiensten'],
    },
  },
  {
    slug: 'gardener-utrecht',
    title: { en: 'Gardener', nl: 'Hovenier' },
    city: 'Utrecht',
    schedule: { en: 'Flexible', nl: 'Flexibel' },
    company: 'GreenCare',
    description: {
      en: 'Maintain gardens and green spaces for residential and commercial clients.',
      nl: 'Tuinen en groenvoorzieningen onderhouden voor particuliere en zakelijke klanten.',
    },
    chips: {
      en: ['Outdoor work', 'Seasonal+'],
      nl: ['Buitenwerk', 'Seizoensgebonden+'],
    },
  },
  {
    slug: 'logistics-coordinator-rotterdam',
    title: { en: 'Logistics Coordinator', nl: 'Logistiek Coördinator' },
    city: 'Rotterdam',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'PortLogix',
    description: {
      en: 'Coordinate shipment schedules and liaise with suppliers and drivers.',
      nl: 'Verzendschema\'s coördineren en schakelen met leveranciers en chauffeurs.',
    },
    chips: {
      en: ['Dutch B2+', 'Office + field'],
      nl: ['Nederlands B2+', 'Kantoor + veld'],
    },
  },
  {
    slug: 'hotel-housekeeper-amsterdam',
    title: { en: 'Hotel Housekeeper', nl: 'Hotelkamermeisje/-jongen' },
    city: 'Amsterdam',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'StayWell Hotels',
    description: {
      en: 'Clean and prepare hotel rooms to a high standard. Morning shifts.',
      nl: 'Hotelkamers schoonmaken en klaarmaken op hoog niveau. Ochtenddiensten.',
    },
    chips: {
      en: ['No Dutch required', 'Benefits included'],
      nl: ['Geen Nederlands vereist', 'Voordelen inbegrepen'],
    },
  },
  {
    slug: 'painter-den-haag',
    title: { en: 'Painter & Decorator', nl: 'Schilder' },
    city: 'Den Haag',
    schedule: { en: 'Full-time', nl: 'Voltijd' },
    company: 'ColorCraft',
    description: {
      en: 'Interior and exterior painting for residential properties. Experience preferred.',
      nl: 'Binnen- en buitenschilderwerk voor woningen. Ervaring gewenst.',
    },
    chips: {
      en: ['Experience preferred', 'Tools provided'],
      nl: ['Ervaring gewenst', 'Gereedschap aanwezig'],
    },
  },
]

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug)
}

type JobLang = 'en' | 'nl'
function jobLang(lang: Lang): JobLang {
  return lang === 'nl' ? 'nl' : 'en'
}

export function jobTitle(job: Job, lang: Lang): string {
  return job.title[jobLang(lang)]
}

export function jobSchedule(job: Job, lang: Lang): string {
  return job.schedule[jobLang(lang)]
}

export function jobDescription(job: Job, lang: Lang): string {
  return job.description[jobLang(lang)]
}

export function jobChips(job: Job, lang: Lang): string[] {
  return job.chips[jobLang(lang)]
}
