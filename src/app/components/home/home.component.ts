import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

actoresSW: any[] =[];

  // agregamos como parametro el httpClient
  constructor( private swapi: SwapiService) {

    //tener la data en la manos
    this.swapi.getNewReleases()
    .subscribe((data: any) => {
      console.log(data.results);
      this.actoresSW = data.results;

    });
   
  
  }
  ngOnInit() {
  }

}
