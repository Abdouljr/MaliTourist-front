import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/modeles/region';
import { RegionService } from 'src/app/services/regionService/region.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.page.html',
  styleUrls: ['./detail-region.page.scss'],
})
export class DetailRegionPage implements OnInit {
  voirPlus: boolean = false;
  region: Region;
  nom : string;
  imgRegion: string;
  description : string;
  desc : string;
  domaineAct : string;
  codeRegion : string;
  superficie : string;
  langue : string;
  constructor(
    private regionService: RegionService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(){    
    const regionId: string | null = this. route.snapshot.paramMap.get('id');
    // ------------- TOUS LES INFORMATIONS D'UNE REGION ----------------------  
    if(regionId != null){
      this.regionService.regionParSonId(+regionId).subscribe(data => {
        this.region = data;
        console.log(data)
        this.nom = this.region['nom']
        this.imgRegion = this.region["image"]
        this.description = this.region['description']
        this.desc = this.description.substring(0, 200)
        this.domaineAct = this.region['domaineAct']
        console.log("-------------------- " + this.domaineAct + " -----")
        this.codeRegion = this.region['codeRegion']
        this.superficie = this.region['superficie']
        this.langue = this.region['langueMajoritaire']
        
      })
      // ------------- TOUS LES COMMENTAIRES D'UNE REGION ----------------------  
    }
}

}
