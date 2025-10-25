export enum ActivityType {
    NAUTICAL_SPORT = 'nautical_sport',
    HIKING = 'hiking',
    COOKING_CLASS = 'cooking_class',
    CULTURAL_TOUR = 'cultural_tour',
    CYCLING = 'cycling',
    ART_CRAFT = 'art_craft',
    FOOD_AND_DRINK = 'food_and_drink',
    BIRD_WATCHING = 'bird_watching',
    PHOTOGRAPHY_TOUR = 'photography_tour',
    WELLNESS = 'wellness',
}

export type Activity = {
    id: number,
    name: string,
    type: ActivityType,
    price: number,
    lat: number,
    lng: number
}

export const activities: Activity[] = [
    {
        id: 1, name: "Initiation au kayak sur la Seine", type: ActivityType.NAUTICAL_SPORT, price: 50, lat: 49.49, lng: 0.12
    },
    {
        id: 2, name: "Cours de voile débutant", type: ActivityType.NAUTICAL_SPORT, price: 70, lat: 49.52, lng: 0.10
    },
    {
        id: 3, name: "Découverte du paddle en mer", type: ActivityType.NAUTICAL_SPORT, price: 60, lat: 49.50, lng: 0.09
    },
    {
        id: 4, name: "Excursion en bateau au coucher du soleil", type: ActivityType.NAUTICAL_SPORT, price: 85, lat: 49.53, lng: 0.11
    },
    {
        id: 5, name: "Stage de surf avancé", type: ActivityType.NAUTICAL_SPORT, price: 95, lat: 49.48, lng: 0.10
    },
    { id: 6, name: "Randonnée sur les falaises d’Étretat", type: ActivityType.HIKING, price: 40, lat: 49.47, lng: 0.06 },
    { id: 7, name: "Marche guidée dans la forêt de Montgeon", type: ActivityType.HIKING, price: 25, lat: 49.50, lng: 0.07 },
    { id: 8, name: "Balade nature le long de la Seine", type: ActivityType.HIKING, price: 30, lat: 49.48, lng: 0.13 },
    { id: 9, name: "Circuit randonnée littoral du Havre", type: ActivityType.HIKING, price: 35, lat: 49.49, lng: 0.09 },
    { id: 10, name: "Rando photo au cap de la Hève", type: ActivityType.HIKING, price: 45, lat: 49.51, lng: 0.08 },
    { id: 11, name: "Atelier cuisine normande", type: ActivityType.HIKING, price: 55, lat: 49.50, lng: 0.09 },
    { id: 12, name: "Cours de pâtisserie au caramel beurre salé", type: ActivityType.HIKING, price: 50, lat: 49.48, lng: 0.12 },
    { id: 13, name: "Initiation à la cuisine végétarienne", type: ActivityType.HIKING, price: 45, lat: 49.49, lng: 0.11 },
    { id: 14, name: "Atelier crêpes et cidre", type: ActivityType.HIKING, price: 40, lat: 49.51, lng: 0.13 },
    { id: 15, name: "Masterclass chef local", type: ActivityType.HIKING, price: 75, lat: 49.50, lng: 0.10 },
    { id: 16, name: "Visite guidée du port du Havre", type: ActivityType.CULTURAL_TOUR, price: 20, lat: 49.49, lng: 0.09 },
    { id: 17, name: "Découverte du musée d’art moderne MuMa", type: ActivityType.CULTURAL_TOUR, price: 18, lat: 49.49, lng: 0.12 },
    { id: 18, name: "Visite du centre reconstruit par Perret", type: ActivityType.CULTURAL_TOUR, price: 22, lat: 49.49, lng: 0.10 },
    { id: 19, name: "Balade historique du front de mer", type: ActivityType.CULTURAL_TOUR, price: 25, lat: 49.50, lng: 0.08 },
    { id: 20, name: "Découverte de la bibliothèque Niemeyer", type: ActivityType.CULTURAL_TOUR, price: 15, lat: 49.49, lng: 0.11 },
    { id: 21, name: "Tour à vélo sur la côte d’Albâtre", type: ActivityType.CYCLING, price: 35, lat: 49.52, lng: 0.13 },
    { id: 22, name: "Excursion en VTT dans les bois", type: ActivityType.CYCLING, price: 40, lat: 49.50, lng: 0.07 },
    { id: 23, name: "Balade à vélo électrique en ville", type: ActivityType.CYCLING, price: 30, lat: 49.49, lng: 0.10 },
    { id: 24, name: "Circuit vélo Le Havre - Honfleur", type: ActivityType.CYCLING, price: 55, lat: 49.48, lng: 0.09 },
    { id: 25, name: "Tour en trottinette électrique", type: ActivityType.CYCLING, price: 25, lat: 49.51, lng: 0.12 },
    { id: 26, name: "Atelier céramique artisanale", type: ActivityType.ART_CRAFT, price: 60, lat: 49.48, lng: 0.07 },
    { id: 27, name: "Atelier peinture marine", type: ActivityType.ART_CRAFT, price: 50, lat: 49.51, lng: 0.11 },
    { id: 28, name: "Stage de sculpture sur bois", type: ActivityType.ART_CRAFT, price: 70, lat: 49.50, lng: 0.10 },
    { id: 29, name: "Cours de dessin urbain", type: ActivityType.ART_CRAFT, price: 35, lat: 49.48, lng: 0.08 },
    { id: 30, name: "Initiation à la mosaïque", type: ActivityType.ART_CRAFT, price: 45, lat: 49.49, lng: 0.09 },
    { id: 31, name: "Dégustation de fromages normands", type: ActivityType.FOOD_AND_DRINK, price: 25, lat: 49.50, lng: 0.07 },
    { id: 32, name: "Tour gastronomique du centre-ville", type: ActivityType.FOOD_AND_DRINK, price: 55, lat: 49.49, lng: 0.10 },
    { id: 33, name: "Atelier mixologie et cocktails", type: ActivityType.FOOD_AND_DRINK, price: 50, lat: 49.48, lng: 0.09 },
    { id: 34, name: "Visite d’une cidrerie locale", type: ActivityType.FOOD_AND_DRINK, price: 30, lat: 49.52, lng: 0.14 },
    { id: 35, name: "Découverte des marchés artisanaux", type: ActivityType.FOOD_AND_DRINK, price: 15, lat: 49.50, lng: 0.11 },
    { id: 36, name: "Observation des oiseaux du littoral", type: ActivityType.BIRD_WATCHING, price: 20, lat: 49.52, lng: 0.15 },
    { id: 37, name: "Balade ornithologique guidée", type: ActivityType.BIRD_WATCHING, price: 30, lat: 49.51, lng: 0.13 },
    { id: 38, name: "Sortie nature dans les marais", type: ActivityType.BIRD_WATCHING, price: 35, lat: 49.47, lng: 0.08 },
    { id: 39, name: "Atelier d’observation avec longue-vue", type: ActivityType.BIRD_WATCHING, price: 25, lat: 49.50, lng: 0.09 },
    { id: 40, name: "Exploration de la réserve ornithologique", type: ActivityType.BIRD_WATCHING, price: 40, lat: 49.53, lng: 0.12 },
    { id: 41, name: "Stage de photographie de paysage", type: ActivityType.PHOTOGRAPHY_TOUR, price: 70, lat: 49.47, lng: 0.09 },
    { id: 42, name: "Atelier photo au lever du soleil", type: ActivityType.PHOTOGRAPHY_TOUR, price: 60, lat: 49.49, lng: 0.10 },
    { id: 43, name: "Balade photo urbaine", type: ActivityType.PHOTOGRAPHY_TOUR, price: 35, lat: 49.49, lng: 0.08 },
    { id: 44, name: "Initiation à la photo de nature", type: ActivityType.PHOTOGRAPHY_TOUR, price: 45, lat: 49.50, lng: 0.12 },
    { id: 45, name: "Cours photo composition et lumière", type: ActivityType.PHOTOGRAPHY_TOUR, price: 55, lat: 49.51, lng: 0.09 },
    { id: 46, name: "Séance de yoga sur la plage", type: ActivityType.WELLNESS, price: 25, lat: 49.50, lng: 0.06 },
    { id: 47, name: "Atelier méditation et respiration", type: ActivityType.WELLNESS, price: 30, lat: 49.49, lng: 0.09 },
    { id: 48, name: "Massage relaxant au spa marin", type: ActivityType.WELLNESS, price: 80, lat: 49.51, lng: 0.10 },
    { id: 49, name: "Cours de pilates en plein air", type: ActivityType.WELLNESS, price: 35, lat: 49.50, lng: 0.08 },
    { id: 50, name: "Retraite bien-être week-end", type: ActivityType.WELLNESS, price: 95, lat: 49.52, lng: 0.11 },
];
