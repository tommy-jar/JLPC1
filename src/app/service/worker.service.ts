import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Worker } from '../model/worker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url = `${baseUrl}/workers`;


  constructor(private http:HttpClient) { }

  register(worker : Worker){
    return this.http.post(this.url, worker);
  }

  list(): Observable<any>{
     return this.http.get<Worker[]>(this.url);
  }

  delet(id : number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
