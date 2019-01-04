import { Injectable } from '@angular/core';
import {CabinetInterface} from "./dataInterfaces/cabinet";
import {HttpClient} from "@angular/common/http";
import {Adresse} from "./dataInterfaces/adresse";
import { PatientInterface } from './dataInterfaces/patient';
import { sexeEnum } from './dataInterfaces/sexe';
import { InfirmierInterface } from './dataInterfaces/infirmier';


@Injectable({
  providedIn: 'root'
})
export class CabinetMedicalService {

  cabinet : CabinetInterface;

  constructor(private _http: HttpClient) { }


  async getData( url : string): Promise<CabinetInterface>{

    const response = await this._http.get(url, { responseType: 'text' }).toPromise();
    let parser = new DOMParser();
    let doc = parser.parseFromString(response, 'application/xml');

    if(!doc) return null;

    //console.log(doc);
    //console.log(doc.querySelector('cabinet'));

    const cabinet: CabinetInterface = {
      infirmiers: [],
      patientsNonAffectes: [],
      adresse: this.getAdressFrom(doc.querySelector('cabinet')),
     
    }

    const patientsXML =  Array.from( doc.querySelectorAll( "patients > patient" ) ); //transformer la NodeList en tableau pour le map
    const infirmiersXML =  Array.from( doc.querySelectorAll( "infirmiers > infirmier" ) ); //transformer la NodeList en tableau pour le map

    cabinet.infirmiers = infirmiersXML.map( I => ({
      id      : I.getAttribute("id"),
      prenom  : I.querySelector("prénom").textContent,
      nom     : I.querySelector("nom"   ).textContent,
      photo   : I.querySelector("photo" ).textContent,
      adresse : this.getAdressFrom(I),
      patients: []
    }) )
    
    for (var i = 0; i < cabinet.infirmiers.length; i++) {
      var patientsIci=patientsXML.filter(I => I.querySelector("visite").getAttribute("intervenant")===cabinet.infirmiers[i].id);
      cabinet.infirmiers[i].patients= patientsIci.map( I => this.getPatientFrom(I) );
      //console.log(cabinet.infirmiers[i].patients);
    }


    const patients= patientsXML.filter(I => I.querySelector("visite").hasAttribute("intervenant")===false);
    //console.log(patients);

    cabinet.patientsNonAffectes = patients.map( I => this.getPatientFrom(I) );

    console.log(cabinet);
    return cabinet;
  };

  /*public async addPatient(patient: PatientInterface): Promise<PatientInterface> {
    const res = await this._http.post('/addPatient', {
        patientName: patient.nom,
        patientForname: patient.prénom,
        patientNumber: patient.numéroSécuritéSociale,
        patientSex: patient.sexe,
        patientBirthday: 'AAAA-MM-JJ',
        patientFloor: patient.adresse.étage,
        patientStreetNumber: patient.adresse.numéro,
        patientStreet: patient.adresse.rue,
        patientPostalCode: patient.adresse.codePostal,
        patientCity: patient.adresse.ville
    }, {observe: 'response'}).toPromise();
   
    console.log('Add patient renvoie', res);
    if (res.status === 200) {
        // OK on peut ajouter en local
        this.cabinet.patientsNonAffectes.push( patient );
    }
    return null;
  };*/


  public async addPatient(patient: PatientInterface): Promise<PatientInterface> {
    const res = await this._http.post('/addPatient', {
        patientName: "zidane",
        patientForname: "beaugosse",
        patientNumber: 152425875465342,
        patientSex: "M",
        patientBirthday: '1999-05-03',
        patientFloor: 20,
        patientStreetNumber: 50,
        patientStreet: "rue de la cave",
        patientPostalCode: 13006,
        patientCity: "Marseille"
    }, {observe: 'response'}).toPromise();
   
    console.log('Add patient renvoie', res);
    if (res.status === 200) {
        // OK on peut ajouter en local
        console.log('ajout success mon poto');
        //this.cabinet.patientsNonAffectes.push( patient );
    }
    return null;
  };


    private getAdressFrom(root:Element): Adresse{
        let node: Element;
        return {
            ville       : (node = root.querySelector("adresse > ville")     ) ? node.textContent                    : "",
            codePostal  : (node = root.querySelector("adresse > codePostal")) ? parseInt(node.textContent, 10) : 0,
            rue         : (node = root.querySelector("adresse > rue")       ) ? node.textContent                    : "",
            numéro      : (node = root.querySelector("adresse > numéro")    ) ? node.textContent                    : "",
            étage       : (node = root.querySelector("adresse > étage")     ) ? node.textContent                    : "",
            }
    }

    private getPatientFrom(root:Element): PatientInterface{
      return {
          prénom : root.querySelector("prénom").textContent, 
          nom: root.querySelector("nom").textContent ,
          sexe : root.querySelector("sexe" ).textContent,
          numéroSécuritéSociale : root.querySelector("numéro").textContent,
          adresse: this.getAdressFrom(root)
      }
    }
  };