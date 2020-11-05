import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit {

  constructor (
    private http: HttpClient,

  ) { }


  getMovieList(){
    http://omdbapi.com/?apikey=<APIkey>&s=startup&page=1
   return this.http.get('http://www.omdbapi.com/?apikey=48f14dae&s=startup&page=1')
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
