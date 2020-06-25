import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historico } from '../models/historico.model';
import { Pessoa } from '../models/pessoa.model';

const url = 'http://localhost:8088/historico';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  listaFun = 0;
  constructor(private http: HttpClient) { }

  consultar (): Observable<Historico[]>{
    return this.http.get<Historico[]>(url);
  }

  consutarPorid(id: number): Observable<Historico> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Historico>(urlLocal);
  }

  adicional (Historico): Observable<Historico> {
    return this.http.post<Historico>(url,Historico,httpOptions)
  }

  alterar (id,Historico): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Historico,httpOptions);
    }

  excluir (id): Observable<Historico> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Historico>(urlLocal,httpOptions);
  }

  atribuiririr(pessoa: Pessoa){
    if(pessoa.perfil === 'Funcionario'){
      this.listaFun = pessoa.id
    }
  }
}
