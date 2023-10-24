import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }

  URL = 'https://crudcrud.com/api/0b60b7df4af548eabaf0bd8ebac8208a/unicorns'
  getData():Observable<any>{
    return this._HttpClient.get(this.URL)
  }

  postData(task:Task):Observable<any>{
    return this._HttpClient.post(this.URL,task)
  }

  deleteData(id:any):Observable<any>{
    return this._HttpClient.delete(`${this.URL}/${id}`)
  }

  getDataById(id:any):Observable<any>{
    return this._HttpClient.get(`${this.URL}/${id}`)
  }

  editDataById(id:any, task:Task):Observable<any>{
    return this._HttpClient.put(`${this.URL}/${id}`,task)
  }

}
