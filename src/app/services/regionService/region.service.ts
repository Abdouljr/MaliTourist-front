import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/app/modeles/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  url: string = "http://localhost:8080";
  constructor(private http : HttpClient) { }

// ------------------------ AJOUTER UNE REGION ----------------------------------------------
  ajouterRegion(region : Region) :Observable<void>{
    return this.http.post<void>(`${this.url}/region/ajouter`, region);
  }

// ------------------------ AJOUTER UNE REGION ----------------------------------------------
  listeRegion() :Observable<Region[]>{
    return this.http.get<Region[]>(`${this.url}/region/lire`);
  }
// ------------------------ AJOUTER UNE REGION ----------------------------------------------
  modifierRegion(id_region : number, region : Region) :Observable<Region>{
    return this.http.put<Region>(`${this.url}/region/modifier/${id_region}`, region)
  }
// ------------------------ UNE REGION PAR SON ID ----------------------------------------------
  regionParSonId(id_region: number) :Observable<Region>{
    return this.http.get<Region>(`${this.url}/region/${id_region}`);
  }

// ------------------------ UPLOADER UNE IMAGE POUR UNE REGION ----------------------------------------------
 upload(image: File) :Observable<void>{
  const l = new FormData();
  l.append('file', image);
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http.post<void>(`${this.url}/pays/upload`, l, {headers});
 }

// ------------------------ AJOUTER UNE REGION -------------------------------------------------
  supprimerRegion(id_region: number) :Observable<void>{
    return this.http.delete<void>(`${this.url}/region/supprimer/${id_region}`);
  }

}
