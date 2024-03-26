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
    this.materielService.consulterMateriel(this.activatedRoute.snapshot.params['id'])
     .subscribe(mat =>{this.currentMateriel=mat;
      console.log(mat);
    });

   this.materielService.listeCategories()
    .subscribe(cats =>{this.categories=cats._embedded.categories;
      console.log(cats);
    });

    this.materielService.listeInterventions()
    .subscribe(ints =>{this.interventions = ints._embedded.interventions;
     console.log(ints);
    });
    this.materielService.consulterMateriel(this.activatedRoute.snapshot.params['id'])
    .subscribe(mat =>{this.currentMateriel=mat;

    this.updatedCatId = this.currentMateriel.categorie.idCat;
    this.updatedIntId =this.currentMateriel.intervention.idInt;
  });
 }

  updateMateriel(){
  /* this.materielService.updateMateriel(this.currentMateriel).subscribe(mat =>{
      this.router.navigate(['materiaux']);
    })*/
    this.currentMateriel.categorie = this.categories
    .find(cat =>cat.idCat == this.updatedCatId )!;
    this.currentMateriel.intervention = this.interventions
    .find(int =>int.idInt == this.updatedIntId )!;
    this.materielService.updateMateriel(this.currentMateriel)
    .subscribe(mat =>{
      this.router.navigate(['materiaux'])
    });
  }

}
