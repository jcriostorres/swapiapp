import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SwapiService {

  constructor(private http: HttpClient) {
    console.log('swapi service listo');
  }

  getNewReleases(){

    return this.http.get("http://swapi.dev/api/people/");
    

  }
}
