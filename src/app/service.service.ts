import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // url = 'https://young-spire-25464.herokuapp.com/api/pn/getall';
  url = 'http://127.0.0.1:8000/api/getall';
  constructor(private http: HttpClient) { }

  displayData(){
    return this.http.get(this.url)
  }
}
