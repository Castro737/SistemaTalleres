import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  private apiUrl = 'https://localhost:7040/api/Tallers'; // CAMBIA xxxx por tu puerto

  constructor(private http: HttpClient) { }

  obtenerTalleres() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTaller(taller: any) {
    return this.http.post(this.apiUrl, taller);
  }
}