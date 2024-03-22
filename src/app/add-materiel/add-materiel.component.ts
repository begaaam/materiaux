
import { Component, OnInit } from '@angular/core';
import { Materiel } from '../models/materiel.model';
import { MaterielService } from '../services/materiel.service';
import { Categorie } from '../models/categorie.model';
import { Intervention } from '../models/intervention.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {

  interventions!:Intervention[];
  newInt!:number;
  newIntervention!:Intervention;

  categories!:Categorie[];
  newIdCat!:number;
  newCategorie!:Categorie;

  newMateriel = new Materiel();
  constructor(private materielService:MaterielService,
              private router:Router){}
  ngOnInit(): void {
     // console.log(this.newMateriel);
     this.categories = this.materielService.listeCategories();
     this.interventions = this.materielService.listeInterventions();
  }
   ajouterMateriel(){
    //console.log(this.newMateriel);
    //this.materielService.addMateriel(this.newMateriel);
    this.newCategorie = this.materielService.consulterCategorie(this.newIdCat);
    this.newMateriel.categorie= this.newCategorie;
    //this.materielService.addMateriel(this.newMateriel);
    // intervention
    this.newIntervention = this.materielService.consulterIntervention(this.newInt);
    this.newMateriel.intervention = this.newIntervention;
    this.materielService.addMateriel(this.newMateriel);
    console.log(this.newMateriel);
    this.router.navigate(['materiaux']);
   }
}
