import { CabinetMedicalService } from './../cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';

import { Component, OnInit, Input } from '@angular/core';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-infirmiers',
  templateUrl: './infirmiers.component.html',
  styleUrls: ['./infirmiers.component.css']
})
export class InfirmiersComponent implements OnInit {

  constructor(private cabinetService: CabinetMedicalService) {
  }

   @Input() infirmier;

  ngOnInit() {
    //console.log(this.infirmier.nom);
  }
  async desaffecter(numéro){
    console.log("dissocier" + numéro);
    await this.cabinetService.desaffecter(numéro);
  }
}
