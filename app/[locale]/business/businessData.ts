import { useCurrentLocale } from "@/locales/client"

export type DataSheet = {
    id: string
    title: string
    tagline: string
    tags: [string, string, string]
}

export const getDataSheet = (locale: "fr" | "en"): DataSheet[] => [
    {
        id: "DS-001",
        title: locale === "fr" ? "Centre de Congrès La Rivière" : "La Rivière Convention Center",
        tagline: locale === "fr" ? "Un espace modulable au cœur de la ville" : "A flexible venue in the heart of the city",
        tags: locale === "fr" ? ["Modulable", "Centre-ville", "Jusqu'à 800 pers"] : ["Modular", "City Center", "Up to 800 ppl"]
    },
    {
        id: "DS-002",
        title: locale === "fr" ? "Auditorium Horizon" : "Horizon Auditorium",
        tagline: locale === "fr" ? "Idéal pour vos conférences et plénières" : "Perfect for conferences and plenaries",
        tags: locale === "fr" ? ["Conférence", "Sonorisation", "500 places"] : ["Conference", "Sound system", "500 seats"]
    },
    {
        id: "DS-003",
        title: locale === "fr" ? "Salle de Réunion Azur" : "Azur Meeting Room",
        tagline: locale === "fr" ? "Une salle lumineuse pour vos réunions stratégiques" : "A bright room for strategic meetings",
        tags: locale === "fr" ? ["Lumineux", "Écran", "20 pers"] : ["Bright", "Screen", "20 ppl"]
    },
    {
        id: "DS-004",
        title: locale === "fr" ? "Espace Panorama" : "Panorama Hall",
        tagline: locale === "fr" ? "Vue imprenable pour vos événements premium" : "Stunning view for premium events",
        tags: locale === "fr" ? ["Vue", "Cocktails", "150 pers"] : ["View", "Cocktails", "150 ppl"]
    },
    {
        id: "DS-005",
        title: locale === "fr" ? "Pavillon du Parc" : "Park Pavilion",
        tagline: locale === "fr" ? "Un cadre naturel pour vos séminaires" : "A natural setting for your seminars",
        tags: locale === "fr" ? ["Nature", "Séminaire", "70 pers"] : ["Nature", "Seminar", "70 ppl"]
    },
    {
        id: "DS-006",
        title: locale === "fr" ? "Salle Technique Quartz" : "Quartz Technical Room",
        tagline: locale === "fr" ? "Parfait pour ateliers et formations" : "Ideal for workshops and training",
        tags: locale === "fr" ? ["Atelier", "Tables", "30 pers"] : ["Workshop", "Tables", "30 ppl"]
    },
    {
        id: "DS-007",
        title: locale === "fr" ? "Hall d’Exposition Nova" : "Nova Exhibition Hall",
        tagline: locale === "fr" ? "Grand espace modulable pour salons" : "Large modular space for trade shows",
        tags: locale === "fr" ? ["Salon", "Grand format", "Stand"] : ["Expo", "Large space", "Booths"]
    },
    {
        id: "DS-008",
        title: locale === "fr" ? "Terrasse Événementielle Céleste" : "Celeste Event Terrace",
        tagline: locale === "fr" ? "Parfaite pour vos soirées en plein air" : "Perfect for open-air receptions",
        tags: locale === "fr" ? ["Extérieur", "Cocktail", "200 pers"] : ["Outdoor", "Cocktail", "200 ppl"]
    },
    {
        id: "DS-009",
        title: locale === "fr" ? "Salle Bordeaux" : "Bordeaux Room",
        tagline: locale === "fr" ? "Élégante et équipée pour vos réunions" : "Elegant and fully equipped meeting room",
        tags: locale === "fr" ? ["Écran", "Wi-Fi", "15 pers"] : ["Screen", "Wi-Fi", "15 ppl"]
    },
    {
        id: "DS-010",
        title: locale === "fr" ? "Salon Prestige" : "Prestige Lounge",
        tagline: locale === "fr" ? "Un salon haut de gamme pour rendez-vous VIP" : "High-end lounge for VIP meetings",
        tags: locale === "fr" ? ["Premium", "Privé", "10 pers"] : ["Premium", "Private", "10 ppl"]
    },
    {
        id: "DS-011",
        title: locale === "fr" ? "Studio Multimédia Orion" : "Orion Multimedia Studio",
        tagline: locale === "fr" ? "Idéal pour webinaires et captations vidéo" : "Perfect for webinars and video recording",
        tags: locale === "fr" ? ["Vidéo", "Webinaire", "Technique"] : ["Video", "Webinar", "Technical"]
    },
    {
        id: "DS-012",
        title: locale === "fr" ? "Espace Banquet Lumière" : "Lumière Banquet Hall",
        tagline: locale === "fr" ? "Pour vos dîners et événements festifs" : "For dinners and festive events",
        tags: locale === "fr" ? ["Banquet", "Catering", "250 pers"] : ["Banquet", "Catering", "250 ppl"]
    },
    {
        id: "DS-013",
        title: locale === "fr" ? "Salle Atelier Vert" : "Green Workshop Room",
        tagline: locale === "fr" ? "Un espace créatif pour vos sessions de travail" : "A creative space for team sessions",
        tags: locale === "fr" ? ["Créatif", "Atelier", "25 pers"] : ["Creative", "Workshop", "25 ppl"]
    },
    {
        id: "DS-014",
        title: locale === "fr" ? "Chapiteau Événementiel Tempo" : "Tempo Event Marquee",
        tagline: locale === "fr" ? "Solution extérieure polyvalente" : "Versatile outdoor event structure",
        tags: locale === "fr" ? ["Extérieur", "Flexible", "Grand format"] : ["Outdoor", "Flexible", "Large size"]
    },
    {
        id: "DS-015",
        title: locale === "fr" ? "Loft Industriel Forge" : "Forge Industrial Loft",
        tagline: locale === "fr" ? "Ambiance moderne pour événements tendances" : "Modern vibe for trendy events",
        tags: locale === "fr" ? ["Industriel", "Moderne", "100 pers"] : ["Industrial", "Modern", "100 ppl"]
    },
    {
        id: "DS-016",
        title: locale === "fr" ? "Salle Conférence Opale" : "Opal Conference Room",
        tagline: locale === "fr" ? "Confort et technologie pour vos plénières" : "Comfort & technology for plenary sessions",
        tags: locale === "fr" ? ["Plénière", "Projecteur", "120 pers"] : ["Plenary", "Projector", "120 ppl"]
    },
    {
        id: "DS-017",
        title: locale === "fr" ? "Galerie d’Art Événementielle" : "Event Art Gallery",
        tagline: locale === "fr" ? "Un lieu atypique pour vos cocktails" : "A unique venue for your receptions",
        tags: locale === "fr" ? ["Atypique", "Art", "Réception"] : ["Unique", "Art", "Reception"]
    },
    {
        id: "DS-018",
        title: locale === "fr" ? "Rooftop Horizon Nord" : "North Horizon Rooftop",
        tagline: locale === "fr" ? "Un panorama exceptionnel pour vos événements" : "Exceptional views for your events",
        tags: locale === "fr" ? ["Rooftop", "Panorama", "120 pers"] : ["Rooftop", "Panorama", "120 ppl"]
    },
    {
        id: "DS-019",
        title: locale === "fr" ? "Salle Silence – Espace Confidentiel" : "Silence Room – Confidential Space",
        tagline: locale === "fr" ? "Pour réunions discrètes ou coaching" : "For discreet meetings or coaching",
        tags: locale === "fr" ? ["Confidentiel", "Calme", "8 pers"] : ["Confidential", "Quiet", "8 ppl"]
    },
    {
        id: "DS-020",
        title: locale === "fr" ? "Salle de Réception Émeraude" : "Emerald Reception Room",
        tagline: locale === "fr" ? "Idéale pour mariages, galas et soirées" : "Ideal for weddings, galas and parties",
        tags: locale === "fr" ? ["Réception", "Élégant", "300 pers"] : ["Reception", "Elegant", "300 ppl"]
    }
]
