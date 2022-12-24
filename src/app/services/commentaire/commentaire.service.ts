import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/modeles/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  url: string = "http://localhost:8080";
  constructor(private http : HttpClient) { }
  
// ------------- RECUPERER LA LISTE DES TOUS LES COMMENTAIRES -------------------------------------------
  public listesCommentaires() :Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(`${this.url}/commentaire/lire`)
  }
// ------------- RECUPERER LES COMMENTAIRES PAR REGION --------------------------------------------------
  commentairesParRegion(id_region : number) :Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(`${this.url}/commentaire/region/${id_region}`)
  }


// ------------- AJOUTER UN COMMENTAIRE ---------------------------------------------------------------
  ajouterCommentaire(commentaire : Commentaire) :Observable<void>{
    return this.http.post<void>(`${this.url}/commentaire/ajouter`, commentaire);
  }

// ------------- SUPPRIMER UN COMMENTAIRE --------------------------------------------------------------
  supprimerCommentaire(id : number) :Observable<void>{
    return this.http.delete<void>(`${this.url}/commentaire/supprimer/${id}`);
  }


}
