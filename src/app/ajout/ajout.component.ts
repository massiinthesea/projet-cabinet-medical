import { Component, OnInit, Input } from '@angular/core';
import { CabinetMedicalService } from './../cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { PatientInterface } from '../dataInterfaces/patient';


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

  private sexes = ['M', 'F'];

  private patient: PatientInterface;

  private getPatient() : PatientInterface{
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
  };

  constructor(cabinetMedicalService: CabinetMedicalService ) {
    
    this.onSubmit(cabinetMedicalService);
  }

  /*constructor(patient: PatientInterface ) {

    this.initPatient(patient);
  }*/

  ngOnInit() {
  }

/*  async onSubmit(PatientInterface) {
    this.patient = await PatientInterface.addPatient(this.patient);
    //console.log( this.cms );
    console.log("formulaire valizzzzzdé ok"+this.nomPatient ); 
  }*/
  async onSubmit(cabinetMedicalService){
    this.patient=this.getPatient();
    console.log("saluuuuuut****  " + this.patient.nom);
    this.patient = await cabinetMedicalService.addPatient(this.patient);
    console.log("saluuuuuut----  " + this.patient.nom);
    console.log("formulaire validé ok"+this.nomPatient ); 
    
  }
}
