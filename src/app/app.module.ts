import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriauxComponent } from './materiaux/materiaux.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { FormsModule } from '@angular/forms';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriauxComponent,
    AddMaterielComponent,
    UpdateMaterielComponent
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
