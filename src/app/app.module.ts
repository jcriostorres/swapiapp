import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Importar las rutas
import { ROUTES } from './app.routes';

//services
import { SwapiService } from './services/swapi.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajeComponent,
    PeliculaComponent,
    NavbarComponent
  ],
  imports: [
  
  BrowserModule,
  HttpClientModule,
  RouterModule.forRoot (ROUTES, {useHash: true})
  ],

  providers: [SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
