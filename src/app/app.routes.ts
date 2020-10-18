import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

// PAGINADOR DE home
//import {MatPaginatorModule} from '@angular/material/paginator';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'personaje', component: PersonajeComponent},
    { path: 'pelicula', component: PeliculaComponent},
    // cualquier otra ruta redireccione al home
    { path: '', pathMatch: 'full', redirectTo:'home'},
    { path: '**',  pathMatch: 'full', redirectTo:'home'}

];