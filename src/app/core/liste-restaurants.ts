import { Restaurant } from './restaurant';

export const restaurants: Restaurant[] = [
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Le plan B', 'adresse': '15 rue Jean Jacques Rousseau', 'dateDerniereVisite': '12/02/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 2, 'latitude': 47.211665, 'longitude': -1.546741, 'commentaire': [{'auteur': 'Olga', 'texte': 'Pas mal, même si ça manque de kimchi.'}, {'auteur': 'Romain', 'texte': 'Permet de faire une coupure entre 2 UST back.'}], 'restaurantId': 0},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Bento Sakura', 'adresse': '17 rue Louis Blanc', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'latitude': 47.206238, 'longitude': -1.554668, 'commentaire': [{'auteur': 'Antoine', 'texte': 'Le patron me regardait avec un sourire bizarre.'}, {'auteur': 'Nicolas', 'texte': 'Ambiance colorée et sympatique.'}], 'restaurantId': 1},
];
