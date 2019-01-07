import { Component, OnInit, Input } from '@angular/core';
import { CabinetMedicalService } from './../cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { PatientInterface } from '../dataInterfaces/patient';
import { CabinetInterface } from '../dataInterfaces/cabinet';
import { PatientComponent } from '../patient/patient.component';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  private nomPatient;
  private prenomPatient;
  private numeroPatient;
  private naissancePatient;
  private numeroAdressePatient;
  private nomRueAdressePatient;
  private codePostalAdressePatient;
  private villeAdressePatient;
  private sexePatient;
  private afficherMessage=false;

  private sexes = ['M', 'F'];

  private patient: PatientInterface;

  private getPatient() : PatientInterface{

    if((this.prenomPatient != undefined && this.prenomPatient != "") && this.nomPatient != undefined  && this.nomPatient != "" && this.sexePatient != undefined && this.numeroPatient != undefined
      && this.villeAdressePatient != undefined  && this.villeAdressePatient != "" && this.codePostalAdressePatient != undefined && this.codePostalAdressePatient != "" && this.nomRueAdressePatient != undefined 
      && this.nomRueAdressePatient != "" && this.numeroAdressePatient != undefined  && this.numeroAdressePatient != ""  ){
      return {
        prénom : this.prenomPatient, 
        nom: this.nomPatient ,
        sexe : this.sexePatient,
        numéroSécuritéSociale : this.numeroPatient,
        adresse: {
          ville: this.villeAdressePatient,
          codePostal: this.codePostalAdressePatient,
          rue: this.nomRueAdressePatient,
          numéro: this.numeroAdressePatient,
          étage: ""
        }
      }
    }
    else
      this.afficherMessage=true;
  };



 constructor(private cabinetService: CabinetMedicalService) {
}


  ngOnInit() {
  }

  async onSubmit(){
    this.patient=this.getPatient();
    if(this.patient != undefined){
      this.patient = await this.cabinetService.addPatient(this.patient, this.naissancePatient);
      this.afficherMessage=false;
    }
  }
}
