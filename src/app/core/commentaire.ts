export interface ICommentaire {
  auteur: string;
  texte: string;
}

export class Commentaire implements ICommentaire {
  constructor(
    public auteur: string,
    public texte: string
  ) { }
}
