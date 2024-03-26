import { Component, OnInit } from '@angular/core';
import { Materiel } from '../models/materiel.model';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-materiaux',
  templateUrl: './materiaux.component.html',
  styleUrls: ['./materiaux.component.css'],
})
export class MateriauxComponent implements OnInit {
  materiaux!: Materiel[];
  idMateriel?: number;
  nomMateriel?: string;
  dateCreation?: Date;
  dateFin?: Date;

  constructor(private materielService: MaterielService) {
   // this.materiaux = materielService.listeMateriaux();
                    }
  ngOnInit(): void {
    this.chargerMateriaux();
  }
  chargerMateriaux(){
    this.materielService.listeMateriaux().subscribe(mats=>{
      console.log(mats);
      this.materiaux=mats;
    })
  }
  /*
  supprimerMateriel(mat: Materiel) {
   // console.log(mat);
   let conf = confirm("Etes-vous sûr ?")
   if(conf)
   this.materielService.supprimerMateriel(mat);
  }*/
  supprimerMateriel(mat: Materiel) {
    let conf = confirm("Etes-vous sûr ?")
    if(conf)
    this.materielService.supprimerMateriel(mat.idMateriel!).subscribe(()=>{
            console.log("materiel supprimé");
           this.chargerMateriaux();
      });
   }
}
