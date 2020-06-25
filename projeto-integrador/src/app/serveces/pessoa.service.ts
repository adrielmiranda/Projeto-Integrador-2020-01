import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

const url = 'http://localhost:8088/pessoa';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  consultar (): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(url);
  }

   consutarPorPerfil(perfil: String): Observable<Pessoa> {
    const urlLocal = `${url}/perfil/Funcionario`;
    return this.http.get<Pessoa>(urlLocal);
  }

  consultarPorPerfil( perfil: String): Observable<Pessoa> {
    const urlLocal = `${url}/perfil/Cliente`;
    return this.http.get<Pessoa>(urlLocal);
  }

  consutarPorid(id: number): Observable<Pessoa> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Pessoa>(urlLocal);
  }

  adicional (Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(url,Pessoa,httpOptions)
  }

  alterar (id,Pessoa): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Pessoa,httpOptions);
    }

  excluir (id): Observable<Pessoa> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Pessoa>(urlLocal,httpOptions);
  }
}
