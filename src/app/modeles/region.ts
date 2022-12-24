import { Commentaire } from "./commentaire";

export class Region{
    id: number;
    nom: string;
    image: string;
    description: string;
    codeRegion: string;
    domaineAct: string;
    superficie: string;
    langueMajoritaire: string;
    commentaires: Commentaire[]

    constructor(init: Partial<Region>) {
        Object.assign(this, init);
      }
}