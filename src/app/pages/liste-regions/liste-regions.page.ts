import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Commentaire } from 'src/app/modeles/commentaire';
import { ListeCommentaire } from 'src/app/modeles/listesCommentaire';
import { Region } from 'src/app/modeles/region';
import { CommentaireService } from 'src/app/services/commentaire/commentaire.service';
import { RegionService } from 'src/app/services/regionService/region.service';

@Component({
  selector: 'app-liste-regions',
  templateUrl: './liste-regions.page.html',
  styleUrls: ['./liste-regions.page.scss'],
})
export class ListeRegionsPage implements OnInit {

  regions : Region[];
  nombreCommentaire: number;
  listeCommentaires : Array<number> = [];
  constructor(private regionService : RegionService, private commentaireService : CommentaireService, private alerte : AlertController) { }
  ngOnInit() {
    // ------------- liste de tous les régions du mali ----------------
    this.regionService.listeRegion().subscribe(data =>{
      this.regions = data;
      console.table(this.regions)
      for (const region of data) {
        this.commentaireService.commentairesParRegion(region['id']).subscribe(commentaire => {
          console.log(commentaire.length)
          this.listeCommentaires.push(commentaire.length)
        });

        
      }
      console.table(this.listeCommentaires)
      });
    }

    async supprimer(region : Region) {
      const alert = await this.alerte.create({
        header: 'Êtes-vous sûr de le faire?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {
              // this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'Oui',
            role: 'confirm',
            handler: () => {
              // this.handlerMessage = 'Alert confirmed';
            const index = this.regions.indexOf(region);
            this.regions.splice(index, 1);
            console.log("--------------- son index est ----  " + index)
            // this.regionService.supprimerRegion(region['id']).subscribe(resulat =>{
            // }
    //   );
            },
          },
        ],
      });
  
      await alert.present();
  
    }
  }
    
