
import { Intervention } from "./intervention.model";
import { Categorie } from "./categorie.model";

export class Materiel{
  idMateriel?: number;
  nomMateriel?: string;
  dateCreation?: Date;
  dateFin?: Date;
  categorie!:Categorie;
  intervention!:Intervention;
}
