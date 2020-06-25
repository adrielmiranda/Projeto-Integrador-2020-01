import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdemServico } from '../models/ordem-servico.mode';
import { Pessoa } from '../models/pessoa.model';

const url = 'http://localhost:8088/ordem';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
 listaFun = 0;
  constructor(private http: HttpClient) { }

  consultar (): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(url);
  }

  consutarPorid(id: number): Observable<OrdemServico> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<OrdemServico>(urlLocal);
  }

  adicional (OrdemServico): Observable<OrdemServico> {
    
    return this.http.post<OrdemServico>(url,OrdemServico,httpOptions)
  }

  alterar (id,OrdemServico): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,OrdemServico,httpOptions);
    }

  excluir (id): Observable<OrdemServico> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<OrdemServico>(urlLocal,httpOptions);
  }

  /*atribuiririr(pessoa: Pessoa){
    if(pessoa.perfil === 'Funcionario'){
      this.listaFun = pessoa.id
    }
  }*/
}
