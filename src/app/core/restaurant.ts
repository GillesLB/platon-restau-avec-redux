
export interface IRestaurant {
    check: boolean;
    nom: string;
    adresse: string;
    dateDerniereVisite: string;
    note: number;
    nombreVisite: number;
    nombreCommentaire: number;
    commentaire: any[];
    restaurantId: number;
}

export class Restaurant implements IRestaurant {
    constructor(
        public check: boolean,
        public nom: string,
        public adresse: string,
        public dateDerniereVisite: string,
        public note: number,
        public nombreVisite: number,
        public nombreCommentaire: number,
        public commentaire: any[],
        public restaurantId: number
    ) {}
}
