import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'home', component: HomeComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'leistungen', component: LeistungenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
