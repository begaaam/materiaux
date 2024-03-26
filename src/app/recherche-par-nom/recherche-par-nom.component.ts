import { Component, OnInit } from '@angular/core';
import { Materiel } from '../models/materiel.model';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [],
})
export class RechercheParNomComponent implements OnInit {
  nomMateriel!: string;
  searchTerm!:string;
  materiel!: Materiel;
  materiaux!: Materiel[];
  allmateriaux!: Materiel[];

  constructor(private materielService: MaterielService) {}

  ngOnInit(): void {
      this.materielService.listeMateriaux()
      .subscribe(mats =>{
        console.log(mats);
        this.materiaux =mats;
      });
  }
  onKeyUp(filterText : string){
    this.materiaux = this.allmateriaux.filter(item =>
      item.nomMateriel?.toLowerCase().includes(filterText));
  }
  rechercherMats() {
    this.materielService
      .rechercherParNom(this.nomMateriel)
      .subscribe((mats) => {
        this.materiaux = mats;
        console.log(mats);
      });
  }
}
