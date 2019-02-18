export class Restaurant {

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
