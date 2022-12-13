import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getStateList(){
    const url = this.baseUrl+'SignUpAPI/GetStateList';
    return this.http.get(url);
  }
}
