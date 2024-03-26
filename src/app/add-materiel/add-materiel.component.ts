
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
     this.materielService.listeCategories()
     .subscribe(cats =>{
      console.log(cats);
      this.categories =cats._embedded.categories;
      //this.categories =cats;
       });
       this.materielService.listeInterventions().
       subscribe(ints =>{
        console.log(ints);
        this.interventions =ints._embedded.interventions;
       //this.interventions =ints;
      });
  }
    /*
   ajouterMateriel(){
     this.materielService.addMateriel(this.newMateriel)
     .subscribe(mat =>{
      console.log(mat);
      this.router.navigate(['materiaux']);
     })
   }
   */
   ajouterMateriel(){
    this.newMateriel.categorie =this.categories.find(cat =>cat.idCat == this.newIdCat)!;
    this.newMateriel.intervention=this.interventions.find(int=> int.idInt == this.newInt)!;
    this.materielService.addMateriel(this.newMateriel)
    .subscribe(mat=>{
      console.log(mat);
      this.router.navigate(['materiaux']);
    })


  }
}
