import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriauxComponent } from './materiaux/materiaux.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';

const routes: Routes = [
  {path: "updatemateriel/:id", component : UpdateMaterielComponent},
  {path: "materiaux", component : MateriauxComponent},
  {path: "addmateriel", component : AddMaterielComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeCategories", component : ListeCategorieComponent},
  {path: "", redirectTo : "materiaux", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
