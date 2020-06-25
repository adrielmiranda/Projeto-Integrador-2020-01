import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaboratorioSala } from '../models/laboratorio-sala.model';

const url = 'http://localhost:8088/laboratorio';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LaboratorioSalaService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<LaboratorioSala[]>{
    return this.http.get<LaboratorioSala[]>(url);
  }

  consutarPorid(id: number): Observable<LaboratorioSala> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<LaboratorioSala>(urlLocal);
  }

  adicional (LaboratorioSala): Observable<LaboratorioSala> {
    return this.http.post<LaboratorioSala>(url,LaboratorioSala,httpOptions)
  }

  alterar (id,LaboratorioSala): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,LaboratorioSala,httpOptions);
    }

  excluir (id): Observable<LaboratorioSala> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<LaboratorioSala>(urlLocal,httpOptions);
  }
}
