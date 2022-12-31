import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }
   private getHeaders(): HttpHeaders{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }

   getSocio(){
      return this.http.get('http://[::1]:3000/socios');
    }

    crearSocio(data:any){
      const options = {headers: this.getHeaders()};
      return this.http.post('http://[::1]:3000/socios', data, options);
    }

    getComites(){
      return this.http.get('http://[::1]:3000/comites');
    }
}
