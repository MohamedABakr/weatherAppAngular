import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private _HttpClient:HttpClient) { }

  getData(currentSearch:any):Observable<any>{
    return this._HttpClient.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentSearch}&days=3`)
  }

}
