import {sexeEnum} from "./sexe";
import {Adresse} from "./adresse";

export interface PatientInterface {
  prénom: string;
  nom: string;
  sexe: string;
  numéroSécuritéSociale: string;
  adresse: Adresse;
}
