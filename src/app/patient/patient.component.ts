import { Component, OnInit, Input } from '@angular/core';
import { PatientInterface } from '../dataInterfaces/patient';
import { CabinetMedicalService } from './../cabinet-medical.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  @Input() patient;

  ngOnInit() {
    //console.log(this.patient.nom);
  }

}
