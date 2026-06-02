import { Service, Testimonial } from "@/types";

export const propertyServices: Service[] = [
  {
    id: "letting",
    title: "Letting",
    description:
      "End-to-end tenant sourcing, vetting, and placement services. We ensure your property is occupied by reliable, qualified tenants with seamless onboarding.",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    category: "property",
  },
  {
    id: "lease-management",
    title: "Lease Management",
    description:
      "Comprehensive lease administration covering renewals, compliance, rent reviews, and dispute resolution to protect your investment at every stage.",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    category: "property",
  },
  {
    id: "property-sales",
    title: "Property Sales",
    description:
      "Strategic property marketing, valuation, and sales management. We connect owners with qualified buyers and handle every detail of the transaction.",
    icon: "🔑",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
    category: "property",
  },
];

export const facilityServices: Service[] = [
  {
    id: "water-treatment",
    title: "Water Treatment Plant",
    description:
      "Installation, repair, and maintenance of water treatment systems ensuring clean, compliant water supply across residential and commercial estates.",
    icon: "💧",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    category: "facility",
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool Maintenance",
    description:
      "Regular chemical balancing, filtration servicing, and structural maintenance to keep pools pristine, safe, and operational year-round.",
    icon: "🏊",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80",
    category: "facility",
  },
  {
    id: "generator",
    title: "Generator Servicing",
    description:
      "Scheduled and emergency servicing, oil changes, load testing, and full generator maintenance to guarantee uninterrupted power supply.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    category: "facility",
  },
  {
    id: "sewage",
    title: "Sewage Disposal",
    description:
      "Certified sewage management, evacuation, and treatment services maintaining hygiene standards and regulatory compliance for all property types.",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    category: "facility",
  },
  {
    id: "refuse",
    title: "Refuse Disposal",
    description:
      "Scheduled waste collection, sorting, and responsible disposal services. We maintain clean, healthy environments for estates and businesses.",
    icon: "♻️",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    category: "facility",
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    description:
      "Professional deep-cleaning, routine janitorial services, and post-construction cleaning using hospital-grade products and trained personnel.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "facility",
  },
  {
    id: "security",
    title: "Security Services",
    description:
      "Trained security personnel, CCTV management, access control systems, and 24/7 monitoring to protect your property and its occupants.",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    category: "facility",
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    description:
      "Installation, repair, and maintenance of all plumbing systems. Fast response to leaks, blockages, and plumbing emergencies across all property types.",
    icon: "🚰",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    category: "facility",
  },
  {
    id: "carpentry",
    title: "Carpentry Services",
    description:
      "Custom furniture, structural woodwork, repairs, and finishing. Our skilled carpenters deliver precision craftsmanship that enhances property value.",
    icon: "🪚",
    image: "/images/carpentry-services.png",
    category: "facility",
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description:
      "Wiring, installations, fault diagnosis, and preventive maintenance by certified electricians ensuring safety and code compliance at all times.",
    icon: "🔌",
    image: "/images/electrical-services.png",
    category: "facility",
  },
  {
    id: "painting",
    title: "Painting Services",
    description:
      "Interior and exterior painting using premium coatings. Surface preparation, texture work, and finishing that transforms and protects your property.",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
    category: "facility",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adaeze Okonkwo",
    role: "Estate Owner",
    company: "Okonkwo Estates, Victoria Island",
    content:
      "The level of professionalism and attention to detail is unmatched. Our estate has never looked better, and every maintenance request is handled promptly. Truly a premium service.",
    rating: 5,
  },
  {
    id: "2",
    name: "Emeka Chukwudi",
    role: "Managing Director",
    company: "Chukwudi Property Holdings",
    content:
      "We've managed over 40 properties in Lagos, and this team is by far the most reliable facility management company we've worked with. Their 24/7 response is genuinely 24/7.",
    rating: 5,
  },
  {
    id: "3",
    name: "Folake Adeyemi",
    role: "Real Estate Investor",
    company: "Adeyemi Investment Group",
    content:
      "From water treatment to electrical maintenance, everything is handled under one roof. The transparency in billing and service delivery gave us complete peace of mind.",
    rating: 5,
  },
  {
    id: "4",
    name: "Babatunde Fashola",
    role: "Property Developer",
    company: "TF Real Estate, Ikoyi",
    content:
      "Our occupancy rates improved significantly after partnering for lease management. They brought in quality tenants quickly and handled all the paperwork flawlessly.",
    rating: 5,
  },
  {
    id: "5",
    name: "Ngozi Eze",
    role: "Corporate Facilities Manager",
    company: "Eze Commercial Properties",
    content:
      "The generator servicing and electrical teams are top-notch. Zero downtime since we engaged them. Highly recommended for any serious property owner in Lagos.",
    rating: 5,
  },
];

export const whyChooseUs = [
  {
    icon: "🏆",
    title: "Experienced Professionals",
    description:
      "Our team brings decades of combined experience in property management, engineering, and facility operations across Lagos's most prestigious estates.",
  },
  {
    icon: "🔧",
    title: "Reliable Maintenance",
    description:
      "Scheduled and reactive maintenance delivered on time, every time. We prevent problems before they escalate and resolve issues with speed and precision.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description:
      "Emergencies don't keep business hours. Our dedicated support team is available around the clock for urgent maintenance and property management needs.",
  },
  {
    icon: "📊",
    title: "Transparent Delivery",
    description:
      "Detailed service reports, clear billing, and regular updates. You always know what work was done, when, and what it cost — no surprises.",
  },
  {
    icon: "⭐",
    title: "Premium Standards",
    description:
      "We work exclusively with certified professionals and high-quality materials. Every service delivered meets the standards expected by elite property owners.",
  },
  {
    icon: "💰",
    title: "Cost Efficiency",
    description:
      "Comprehensive facility management at a single cost beats managing multiple vendors. We reduce operational overhead while elevating service quality.",
  },
];

export const stats = [
  { value: "500+", label: "Properties Managed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];
