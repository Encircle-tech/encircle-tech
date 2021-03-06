import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {RenComponent} from "./components/projects/ren/ren.component";
import {MosComponent} from "./components/projects/mos/mos.component";
import {EtlComponent} from "./components/projects/etl/etl.component";

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'projects/ren', component: RenComponent},
  {path: 'projects/mos', component: MosComponent},
  {path: 'projects/etl', component: EtlComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
