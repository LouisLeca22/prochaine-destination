import { useCurrentLocale } from "@/locales/client"

export type PressRelease = {
    id: string
    date: Date
    title: string
    tagline: string
    season: string
    tags: [string, string, string]
}


export const getReleases = (locale: "fr" | "en"): PressRelease[] => [
    {
        id: "PR-001",
        date: new Date(2025, 5, 15),
        title: locale === "fr" ? "Ouverture du nouveau Centre d'Accueil de Plage d'Argent" : "Opening of Plage d'Argent Visitor Centre",
        tagline: locale === "fr" ? "Un point d'information moderne pour mieux découvrir la côte." : "A modern information hub to better explore the coast.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr" ? ["visitor-centre", "tourism", "local-services"] : ["centre-daccueil", "tourisme", "services-locaux"]
    },
    {
        id: "PR-002",
        date: new Date(2025, 6, 20),
        title: locale === "fr"
            ? "Festival des Lumières du Cap Brume : programmation annoncée"
            : "Cap Brume Light Festival: Lineup Announced",
        tagline: locale === "fr"
            ? "Des installations lumineuses le long des falaises cet été."
            : "Light installations along the cliffs this summer.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr"
            ? ["festival", "art", "vie-nocturne"]
            : ["festival", "art", "nightlife"],
    },
    {
        id: "PR-003",
        date: new Date(2025, 9, 3),
        title: locale === "fr"
            ? "Restauration du Phare de la Pointe: visite guidée inaugurale"
            : "Pointe Lighthouse Restoration: Inaugural Guided Tour",
        tagline: locale === "fr"
            ? "Le phare retrouve ses couleurs d'antan et ouvre ses portes."
            : "The lighthouse regains its former glory and opens its doors.",
        season: locale === "fr" ? "Automne" : "Autumn",
        tags: locale === "fr"
            ? ["patrimoine", "phare", "visites-guidees"]
            : ["heritage", "lighthouse", "guided-tours"],
    },
    {
        id: "PR-004",
        date: new Date(2025, 2, 28),
        title: locale === "fr"
            ? "Inauguration du Sentier des Dunes"
            : "Inauguration of the Dune Trail",
        tagline: locale === "fr"
            ? "Un parcours côtier aménagé pour la randonnée et l'observation nature."
            : "A coastal path designed for hiking and nature watching.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["randonnee", "nature", "plein-air"]
            : ["hiking", "nature", "outdoors"],
    },
    {
        id: "PR-005",
        date: new Date(2025, 10, 1),
        title: locale === "fr"
            ? "Port de Lune obtient la certification Eco-Tourisme"
            : "Port de Lune Achieves Eco-Tourism Certification",
        tagline: locale === "fr"
            ? "Un pas vers un tourisme durable sur notre littoral."
            : "A step toward sustainable tourism on our coastline.",
        season: locale === "fr" ? "Hiver" : "Winter",
        tags: locale === "fr"
            ? ["durabilite", "certification", "eco-tourisme"]
            : ["sustainability", "certification", "eco-tourism"],
    },
    {
        id: "PR-006",
        date: new Date(2025, 7, 12),
        title: locale === "fr"
            ? "Grande Fête de la Mer : chefs locaux à l'honneur"
            : "Grand Sea Festival: Local Chefs in the Spotlight",
        tagline: locale === "fr"
            ? "Dégustations, marchés et ateliers culinaires autour des produits de la mer."
            : "Tastings, markets and cooking workshops focused on seafood.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr"
            ? ["fete-gastronomique", "produits-de-la-mer", "chefs-locaux"]
            : ["food-festival", "seafood", "local-chefs"],
    },
    {
        id: "PR-007",
        date: new Date(2025, 8, 5),
        title: locale === "fr"
            ? "Régate de Planches à Voile du Banc Crépuscule"
            : "Banc Crépuscule Windsurf Regatta",
        tagline: locale === "fr"
            ? "Compétition internationale et animations pour les familles."
            : "International competition with family activities.",
        season: locale === "fr" ? "Automne" : "Autumn",
        tags: locale === "fr"
            ? ["sports-nautiques", "regate", "evenements-familiaux"]
            : ["watersports", "regatta", "family-events"],
    },
    {
        id: "PR-008",
        date: new Date(2026, 0, 10),
        title: locale === "fr"
            ? "Illuminations d'Hiver à la Corniche"
            : "Winter Illuminations on the Corniche",
        tagline: locale === "fr"
            ? "Spectacle lumineux et marché d'hiver du 10 janvier au 28 février."
            : "Light show and winter market from January 10 to February 28.",
        season: locale === "fr" ? "Hiver" : "Winter",
        tags: locale === "fr"
            ? ["hiver", "illuminations", "marche"]
            : ["winter", "lights", "market"],
    },
    {
        id: "PR-009",
        date: new Date(2025, 3, 14),
        title: locale === "fr"
            ? "Résidences d'artistes : appel à candidatures"
            : "Artist Residencies: Call for Applications",
        tagline: locale === "fr"
            ? "Accueil d'artistes étrangers pour des projets inspirés du littoral."
            : "Hosting international artists for projects inspired by the shoreline.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["residences-dartistes", "culture", "programmes-creatifs"]
            : ["art-residency", "culture", "creative-programs"],
    },
    {
        id: "PR-010",
        date: new Date(2025, 4, 30),
        title: locale === "fr"
            ? "Nouvelle exposition au Musée Maritime : 'Courants et Capitaines'"
            : "New Exhibition at the Maritime Museum: 'Currents and Captains'",
        tagline: locale === "fr"
            ? "Objets historiques et récits de marins de la région."
            : "Historical objects and stories of the region's seafarers.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["musee", "histoire-maritime", "exposition"]
            : ["museum", "maritime-history", "exhibition"],
    },
    {
        id: "PR-011",
        date: new Date(2025, 11, 5),
        title: locale === "fr"
            ? "Marché de Noël flottant sur le Port"
            : "Floating Christmas Market on the Harbour",
        tagline: locale === "fr"
            ? "Artisans locaux et chalets gourmands sur pontons aménagés."
            : "Local artisans and food chalets on adapted pontoons.",
        season: locale === "fr" ? "Hiver" : "Winter",
        tags: locale === "fr"
            ? ["noel", "marche", "artisans-locaux"]
            : ["christmas", "market", "local-artisans"],
    },
    {
        id: "PR-012",
        date: new Date(2026, 4, 21),
        title: locale === "fr"
            ? "Journée de la Biodiversité marine"
            : "Marine Biodiversity Day",
        tagline: locale === "fr"
            ? "Conférences, sorties en mer et ateliers pour enfants."
            : "Talks, boat outings and workshops for kids.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["biodiversite", "education", "vie-marine"]
            : ["biodiversity", "education", "marine-life"],
    },
    {
        id: "PR-013",
        date: new Date(2025, 6, 1),
        title: locale === "fr"
            ? "Lancement du service de navettes côtières électriques"
            : "Launch of Electric Coastal Shuttle Service",
        tagline: locale === "fr"
            ? "Navettes entre les principaux sites touristiques every 30 minutes."
            : "Shuttles linking main sights every 30 minutes.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr"
            ? ["transport", "durabilite", "mobilite"]
            : ["transport", "sustainability", "mobility"],
    },
    {
        id: "PR-014",
        date: new Date(2025, 1, 14),
        title: locale === "fr"
            ? "Saint-Valentin sur la Corniche : dîners et balades"
            : "Valentine's Day on the Corniche: Dinners and Walks",
        tagline: locale === "fr"
            ? "Menus spéciaux et parcours romantique face à la mer."
            : "Special menus and romantic seafront routes.",
        season: locale === "fr" ? "Hiver" : "Winter",
        tags: locale === "fr"
            ? ["saint-valentin", "gastronomie", "romantique"]
            : ["valentines", "dining", "romance"],
    },
    {
        id: "PR-015",
        date: new Date(2025, 9, 18),
        title: locale === "fr"
            ? "Résilience côtière : ateliers citoyens"
            : "Coastal Resilience: Citizen Workshops",
        tagline: locale === "fr"
            ? "Ateliers participatifs pour préparer la côte aux tempêtes."
            : "Participatory workshops to prepare the coast for storms.",
        season: locale === "fr" ? "Automne" : "Autumn",
        tags: locale === "fr"
            ? ["resilience", "citoyen", "climat"]
            : ["resilience", "community", "climate"],
    },
    {
        id: "PR-016",
        date: new Date(2026, 6, 30),
        title: locale === "fr"
            ? "Cinéma en plein air : projections sur la plage"
            : "Open-Air Cinema: Beach Screenings",
        tagline: locale === "fr"
            ? "Classiques et films familiaux au coucher du soleil."
            : "Classics and family films at sunset.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr"
            ? ["plein-air", "cinema", "familial"]
            : ["open-air", "cinema", "family"],
    },
    {
        id: "PR-017",
        date: new Date(2025, 3, 2),
        title: locale === "fr"
            ? "Nettoyage communautaire des plages"
            : "Community Beach Cleanup",
        tagline: locale === "fr"
            ? "Participez à la protection du littoral : gants et sacs fournis."
            : "Join protection of the shoreline: gloves and bags provided.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["benevolat", "nettoyage", "environnement"]
            : ["volunteer", "cleanup", "environment"],
    },
    {
        id: "PR-018",
        date: new Date(2025, 11, 31),
        title: locale === "fr"
            ? "Réveillon du Nouvel An au Belvédère"
            : "New Year's Eve at the Belvedere",
        tagline: locale === "fr"
            ? "Feu d'artifice et DJs locaux pour célébrer la nouvelle année."
            : "Fireworks and local DJs to celebrate the new year.",
        season: locale === "fr" ? "Hiver" : "Winter",
        tags: locale === "fr"
            ? ["nouvel-an", "feu-dartifice", "musique"]
            : ["new-year", "fireworks", "music"],
    },
    {
        id: "PR-019",
        date: new Date(2025, 5, 27),
        title: locale === "fr"
            ? "Semaine de la voile pour débutants"
            : "Beginner Sailing Week",
        tagline: locale === "fr"
            ? "Initiations quotidiennes encadrées par moniteurs certifiés."
            : "Daily initiations led by certified instructors.",
        season: locale === "fr" ? "Été" : "Summer",
        tags: locale === "fr"
            ? ["voile", "sports", "formation"]
            : ["sailing", "sports", "training"],
    },
    {
        id: "PR-020",
        date: new Date(2026, 2, 11),
        title: locale === "fr"
            ? "Salon de la Photographie Littorale"
            : "Coastal Photography Fair",
        tagline: locale === "fr"
            ? "Expos, concours et masterclasses avec photographes invités."
            : "Exhibitions, contests and masterclasses with guest photographers.",
        season: locale === "fr" ? "Printemps" : "Spring",
        tags: locale === "fr"
            ? ["photographie", "exposition", "concours"]
            : ["photography", "exhibition", "contest"],
    },
]
