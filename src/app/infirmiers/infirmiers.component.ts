import { CabinetMedicalService } from './../cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infirmiers',
  templateUrl: './infirmiers.component.html',
  styleUrls: ['./infirmiers.component.css']
})
export class InfirmiersComponent implements OnInit {

  constructor( ) {
    
   }

   @Input() infirmier;

  ngOnInit() {
    //console.log(this.infirmier.nom);
  }

}
