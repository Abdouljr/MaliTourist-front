import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/modeles/commentaire';
import { CommentaireService } from 'src/app/services/commentaire/commentaire.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private commentaireService : CommentaireService) {
  }
  
  ngOnInit(){    
    
  }

  
}
