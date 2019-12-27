import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { AboutComponent } from './about/about.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EditpatientComponent,
    SearchpatientComponent,
    AllpatientComponent,
    AboutComponent,
    PrintdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
