import { Intervention } from "./intervention.model";
export class InterventionWrapper{
  _embedded!:{interventions:Intervention[]};
}
