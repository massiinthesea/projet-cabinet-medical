import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { InfirmiersComponent } from './infirmiers/infirmiers.component';
import { PatientComponent } from './patient/patient.component';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretaryComponent,
    InfirmiersComponent,
    PatientComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
