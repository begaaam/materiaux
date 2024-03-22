import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Materiel } from '../models/materiel.model';
import { Categorie } from '../models/categorie.model';
import { Intervention } from '../models/intervention.model';
const httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  apiURL:string='http://localhost:8080/materiaux/api'
  materiaux!:Materiel[];
  categories!:Categorie[];
  interventions!:Intervention[];
  materiel!:Materiel;
  constructor(private http:HttpClient) {
    /*
    this.categories =[{idCat:1,nomCat:"PC",descriptionCat:"1ere génération"},
                      {idCat:2,nomCat:"Imprimante",descriptionCat:"Epson"}];
           */
          /*
    this.interventions= [{idInt:1,lieuInt:"part dieu",dateInt: new Date("01/14/2011")},
                         {idInt:2,lieuInt:"Gerland",dateInt: new Date("01/14/2011")}];
                         */
    this.materiaux =[
      {idMateriel: 1, nomMateriel :"PC Asus",dateCreation : new Date("01/14/2011"), dateFin : new Date("01/14/2011"),
                        categorie:{idCat:1,nomCat:"PC",descriptionCat:"1ere génération"},
                        intervention:{idInt:1,lieuInt:"part dieu",dateInt: new Date("01/14/2011")}},
      {idMateriel: 2, nomMateriel : "Imprimante Epson", dateCreation : new Date("01/14/2011"), dateFin  : new Date("12/17/2010"),
                        categorie:{idCat:2,nomCat:"Imprimante",descriptionCat:"Epson"},
                        intervention:{idInt:1,lieuInt:"part dieu",dateInt: new Date("01/14/2011")}},
      {idMateriel: 3, nomMateriel :"Tablette Samsung", dateCreation : new Date("01/14/2011"), dateFin  : new Date("02/20/2020"),
                                categorie:{idCat:2,nomCat:"PC",descriptionCat:"1ere génération"},
                                intervention:{idInt:2,lieuInt:"Gerland",dateInt: new Date("01/14/2011")}}
       ];
   }
/*
   listeMateriaux():Materiel[]{
     return this.materiaux;
   }
   */
   listeMateriaux(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(this.apiURL);
  }
   addMateriel(mat:Materiel){
    this.materiaux.push(mat);
   }
   supprimerMateriel(mat:Materiel){
    // supprimer le materiel mat du tableau materiel
    const index = this.materiaux.indexOf(mat,0);
    if(index > -1){
      this.materiaux.splice(index,1);
    }
    // ou Bien
    /*
     this.materiaux.forEach((cur, index)=>{
      if(maat.idMateriel === cur.idMateriel){
        this.materiaux.splice(index,1);
      }
     });
    */
   }
   consulterMateriel(id:number):Materiel{
    this.materiel = this.materiaux.find(m => m.idMateriel == id)!;
    return this.materiel;
   }
   trierMateriel(){
    this.materiaux = this.materiaux.sort((n1, n2) => {
      if (n1.idMateriel && n2.idMateriel) {
        if (n1.idMateriel > n2.idMateriel) {
          return 1;
        }
        if (n1.idMateriel < n2.idMateriel) {
          return -1;
        }
        return 0; // Si les ID sont égaux
      } else {
        if (!n1.idMateriel && n2.idMateriel) {
          return 1; // Mettre les éléments avec ID manquant à la fin
        }
        if (n1.idMateriel && !n2.idMateriel) {
          return -1; // Mettre les éléments avec ID manquant au début
        }
        return 0; // Si les deux ID sont manquants
      }
    });
  }

  updateMateriel(mat:Materiel){
    // console.log(p)
    this.supprimerMateriel(mat);
    this.addMateriel(mat);
    this.trierMateriel();
   }
   // -- categories
   listeCategories():Categorie[]
   {
      return this.categories;
   }
   consulterCategorie(id:number){
    return this.categories.find(cat => cat.idCat == id)!;
   }
  // -- interventions
  listeInterventions():Intervention[]{
    return this.interventions;
  }
  consulterIntervention(id:number):Intervention{
    return this.interventions.find(int => int.idInt == id)!;
  }
}
