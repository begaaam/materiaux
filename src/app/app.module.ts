import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriauxComponent } from './materiaux/materiaux.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { FormsModule } from '@angular/forms';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriauxComponent,
    AddMaterielComponent,
    UpdateMaterielComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategorieComponent,
    UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
