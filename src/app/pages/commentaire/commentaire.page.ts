import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Commentaire } from '../../modeles/commentaire';
import { Region } from '../../modeles/region';
import { CommentaireService } from '../../services/commentaire/commentaire.service';
import { RegionService } from '../../services/regionService/region.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.page.html',
  styleUrls: ['./commentaire.page.scss'],
})
export class CommentairePage implements OnInit {
  voirPlus: boolean = false;
  contient: boolean = false;
  commentaire: string = ""
  commentaires : Commentaire[];
  region: Region;
  imgRegion: string;
  pseudo: string;
  numero: number;
  constructor(
    private commentaireService : CommentaireService,
    private regionService: RegionService,
    private route : ActivatedRoute,
    private alerte : AlertController,
    ) { }
  ngOnInit(){    
    const regionId: string | null = this. route.snapshot.paramMap.get('id');
    // ------------- TOUS LES INFORMATIONS D'UNE REGION ----------------------  
    if(regionId != null){
      this.regionService.regionParSonId(+regionId).subscribe(data => {
        this.region = data;
        this.imgRegion = data["image"]
      })
      // ------------- TOUS LES COMMENTAIRES D'UNE REGION ----------------------  
      this.commentaireService.commentairesParRegion(+regionId).subscribe(data =>{
        this.commentaires = data;
        // console.table(this.commentaires);
        });
    }
}

// ------------------------------ AJOUTER UN COMMENTAIRE -------------------------------------------

async accepter() {
  const alert = await this.alerte.create({
    header: 'Votre Pseudo et Numéro',
    buttons: [{text: 'OK'}],
    inputs: [
      {
        name: "pseudo",
        placeholder: 'Pseudo',
        
      },
      {
        placeholder: 'Numéro (chiffres)',
        name: "numero",
        attributes: {
          maxlength: 15,
        },
      },
    ],
  });
  
  await alert.present();

  const {data} = await alert.onDidDismiss();
  const valeurs  = data.values;
  this.pseudo = valeurs.pseudo;
  let num = valeurs.numero;
  
  try{
    let reponse = num.replace(/\s/g, "");
    this.numero = parseInt(reponse)
    if(this.numero && this.pseudo.length >= 2){
      this.ajouterCommentaire();
    }
  }catch(e){
  }
}



  ajouterCommentaire(){
    if(this.commentaire.length > 2){
    let commentaire = new Commentaire({
      "contenu": this.commentaire,
      "pseudo": this.pseudo,
      "numero": this.numero,
      "region": this.region,
    })
    console.table(commentaire);
      this.commentaireService.ajouterCommentaire(commentaire).subscribe(revient => {this.ngOnInit()})
    }
    this.commentaire = "";
  }
}

