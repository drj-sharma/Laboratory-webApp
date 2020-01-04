import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent},
  { path: 'printdata/:id', component: PrintdataComponent},
  { path: 'searchpatient', component: SearchpatientComponent},
  { path: 'allpatients', component: AllpatientComponent},
  { path: 'reports/:id', component: ReportsComponent},
  { path: 'about', component: AboutComponent},
  {path: "**",
  redirectTo: "/main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
