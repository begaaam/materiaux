import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriauxComponent } from './materiaux/materiaux.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';

const routes: Routes = [
  {path: "updatemateriel/:id", component : UpdateMaterielComponent},
  {path: "materiaux", component : MateriauxComponent},
  {path: "addmateriel", component : AddMaterielComponent},
  {path: "", redirectTo : "materiaux", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
