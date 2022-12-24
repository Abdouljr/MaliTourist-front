import { Region } from "./region";

export class Commentaire{
    id: number;
    contenu: string;
    pseudo: string;
    numero: number;
    region: Region;
    constructor(init: Partial<Commentaire>) {
        Object.assign(this, init);
      }
}