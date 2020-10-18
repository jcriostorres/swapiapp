import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  personajes: any[] = [];

  // agregamos como parametro el httpClient
  constructor( private http: HttpClient) {

    console.log ('Çonstructor del Home hecho');
    this.http.get('https://swapi.dev/api/people')
         .subscribe( (resp: any) => {
           this.personajes = resp;
            console.log(resp);
          });
  
  }
  ngOnInit() {
  }

}
