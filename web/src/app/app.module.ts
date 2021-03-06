import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from './components/common/header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {AboutComponent} from "./components/about/about.component";
import {MatMenuModule} from "@angular/material/menu";
import { RenComponent } from './components/projects/ren/ren.component';
import { MosComponent } from './components/projects/mos/mos.component';
import { EtlComponent } from './components/projects/etl/etl.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    RenComponent,
    MosComponent,
    EtlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
