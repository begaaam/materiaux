import { Component, OnInit } from '@angular/core';
import { Materiel } from '../models/materiel.model';
import { Categorie } from '../models/categorie.model';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
   materiaux!:Materiel[];
   IdCategorie!:number;
   categories!:Categorie[];
   constructor(private materielService:MaterielService){}

   ngOnInit(): void {
       this.materielService.listeCategories()
            .subscribe(cats =>{this.categories=cats._embedded.categories;
              console.log(cats);
            });
        }
        onChange() {
          this.materielService.rechercherParCategorie(this.IdCategorie).
          subscribe(mats =>{this.materiaux=mats});
          }
}
