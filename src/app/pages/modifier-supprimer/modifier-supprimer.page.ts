import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/modeles/region';
import { RegionService } from 'src/app/services/regionService/region.service';

@Component({
  selector: 'app-modifier-supprimer',
  templateUrl: './modifier-supprimer.page.html',
  styleUrls: ['./modifier-supprimer.page.scss'],
})
export class ModifierSupprimerPage implements OnInit {
  region : Region;
  chargement: boolean;
  modification: boolean;
  nom: string;
  codeRegion: string;
  domaineAct: string;
  superficie: string;
  langueMajoritaire: string;
  image: string;
  description: string;
  img: File;
  id: any;
  message: string;
  constructor(private regionService : RegionService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {     
    this.route.params.subscribe((data: any) =>{
      this.id = data.type;
      console.log(data.type)
  
      if(data.type == "ajouter"){
        this.modification = false;
      }else{
        this.modification = true;
        this.regionService.regionParSonId(data.type).subscribe((data) => {
          this.region = data;
          console.log( this.region.nom);
          this.nom = this.region.nom;
          this.codeRegion = this.region.codeRegion;
          this.domaineAct = this.region.domaineAct;
          this.langueMajoritaire = this.region.langueMajoritaire;
          this.image = this.region.image;
          this.description = this.region.description;
          this.superficie = this.region.superficie;
          
        })
      }
    })
   }


   changeImage(image : any){
    this.img = image.target["files"][0]
    this.image = image.target['files'][0]['name']
  }

  ajouterRegion(){
    if(this.nom != null && this.codeRegion != null && this.domaineAct != null && this.superficie != null && this.langueMajoritaire != null && this.description != null){
      let region = new Region({
        nom: this.nom,
        codeRegion: this.codeRegion,
        domaineAct: this.domaineAct,
        superficie: this.superficie,
        langueMajoritaire: this.langueMajoritaire,
        image: this.image,
        description: this.description
      });
      if(this.modification){
        this.regionService.modifierRegion(this.id, region).subscribe(resultat =>{
          this.router.navigateByUrl('/liste-regions', {skipLocationChange: true}).then(()=>{
          this.router.navigate(['/liste-regions']);
          })
        });
      }else{
        this.regionService.ajouterRegion(region).subscribe(resultat => {
          this.router.navigateByUrl('/liste-regions', {skipLocationChange: true}).then(()=>{
          this.router.navigate(['/liste-regions']);
          })   
        });
        if(this.img.size != 0){
          this.regionService.upload(this.img).subscribe(resutat =>{
            console.log("--------- Image uploader -----------")
          });
        }
      }
    }else{
      this.message = "Tout les champs sont obligatoire !"
    }
}

}
