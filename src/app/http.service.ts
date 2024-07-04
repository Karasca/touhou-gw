import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://karasca.com/api'
  charactersUrl = this.baseUrl + '/characters'

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.charactersUrl);
  }
}
