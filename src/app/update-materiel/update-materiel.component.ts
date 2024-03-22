import { Categorie } from './../models/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Materiel } from '../models/materiel.model';
import { MaterielService } from '../services/materiel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from '../models/intervention.model';

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styles: [
  ]
})
export class UpdateMaterielComponent implements OnInit{
  categories!:Categorie[];
  updatedCatId!:number;
  interventions!:Intervention[];
  updatedIntId!:number;
  currentMateriel = new Materiel();
    constructor(private activatedRoute:ActivatedRoute,
                 private router:Router,
                private materielService:MaterielService){}
  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.categories = this.materielService.listeCategories();
    this.interventions = this.materielService.listeInterventions();
    this.currentMateriel = this.materielService.consulterMateriel(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId=this.currentMateriel.categorie.idCat;
    this.updatedIntId=this.currentMateriel.intervention.idInt;

     console.log(this.currentMateriel);
  }
  updateMateriel(){
       this.currentMateriel.categorie=this.materielService.consulterCategorie(this.updatedCatId);
       this.currentMateriel.intervention = this.materielService.consulterIntervention(this.updatedIntId);
       this.materielService.updateMateriel(this.currentMateriel);
       this.router.navigate(['materiaux']);
  }

}
