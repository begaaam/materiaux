import { MaterielService } from './../services/materiel.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styles: [
  ]
})
export class ListeCategorieComponent implements OnInit {

  categories!:Categorie[];

  ajout:boolean=true;

  updatedCat:Categorie = {"idCat":0,"nomCat":"","descriptionCat":""};
  constructor(private materielService:MaterielService){}
  ngOnInit(): void {
    this.chargerCategories();
  }
  chargerCategories(){
    this.materielService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
  categorieUpdated(cat:Categorie){
    console.log("Categorie du compsaont", cat);
    this.materielService.ajouterCategorie(cat).
     subscribe( ()=> this.chargerCategories());
  }

  updateCat(cat:Categorie) {
   this.updatedCat=cat;
   this.ajout=false;
    }
}
