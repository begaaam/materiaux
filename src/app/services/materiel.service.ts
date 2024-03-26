import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Materiel } from '../models/materiel.model';
import { Categorie } from '../models/categorie.model';
import { Intervention } from '../models/intervention.model';
import { apiURL, apiURLCat, apiURLInt } from '../config';
import { CategorieWrapper } from '../models/categorieWrapped.model';
import { InterventionWrapper } from '../models/interventionWrapped.model';
const httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
 // apiURL:string='http://localhost:8080/materiaux/api';
  //apiURLCat:string ='http://localhost:8080/materiaux/cat';
  //apiURLInt:string ='http://localhost:8080/materiaux/int';

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
                      /*
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
  */
   }

   listeMateriaux(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(apiURL);
  }

   addMateriel(mat:Materiel):Observable<Materiel>{
    return this.http.post<Materiel>(apiURL,mat,httpOptions);
   }


   supprimerMateriel(id:number){
        const url =`${apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
      }

   consulterMateriel(id:number):Observable<Materiel>{
    const url = `${apiURL}/${id}`;
    return this.http.get<Materiel>(url);

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

   updateMateriel(mat:Materiel):Observable<Materiel>{
       return this.http.put<Materiel>(apiURL,mat,httpOptions);
   }
   // -- categories
/*
   listeCategories():Observable<Categorie[]>
   {
      //return this.http.get<Categorie[]>(this.apiURL+"/cat");
      return this.http.get<Categorie[]>(apiURLCat);
   }
*/

   listeCategories():Observable<CategorieWrapper>
   {
      return this.http.get<CategorieWrapper>(apiURLCat);
   }

   consulterCategorie(id:number){
    return this.categories.find(cat => cat.idCat == id)!;
   }
   ajouterCategorie(cat:Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(apiURLCat,cat,httpOptions);
   }
  // -- interventions
  /*
  listeInterventions(): Observable<Intervention[]>{
   // return this.http.get<Intervention[]>(apiURL+"/int");
   return this.http.get<Intervention[]>(apiURLInt);
  }
*/

  listeInterventions(): Observable<InterventionWrapper>{

    return this.http.get<InterventionWrapper>(apiURLInt);
   }

  consulterIntervention(id:number):Intervention{
    return this.interventions.find(int => int.idInt == id)!;
  }
  //-- rechecrehr par catégorie
   rechercherParCategorie(idCat: number):Observable<Materiel[]> {
    const url = `${apiURL}/matscat/${idCat}`;
    return this.http.get<Materiel[]>(url);
   }

   rechercherParNom(nom: string):Observable<Materiel[]> {
    const url = `${apiURL}/matsByName/${nom}`;
    return this.http.get<Materiel[]>(url);
    }
}
