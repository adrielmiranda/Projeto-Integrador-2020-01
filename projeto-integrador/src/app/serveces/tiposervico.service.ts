import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tiposervico } from '../models/tiposervico.model';
import { Observable } from 'rxjs';

const url = 'http://localhost:8088/tipo';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TiposervicoService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<Tiposervico[]>{
    return this.http.get<Tiposervico[]>(url);
  }

  consutarPorid(id: number): Observable<Tiposervico> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Tiposervico>(urlLocal);
  }

  adicional (Tiposervico): Observable<Tiposervico> {
    return this.http.post<Tiposervico>(url,Tiposervico,httpOptions)
  }

  alterar (id,Tiposervico): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Tiposervico,httpOptions);
    }

  excluir (id): Observable<Tiposervico> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Tiposervico>(urlLocal,httpOptions);
  }
}
