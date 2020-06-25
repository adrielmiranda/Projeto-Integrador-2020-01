import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdemServico } from '../models/ordem-servico.mode';

const url = 'http://localhost:8088/ordem';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(url);
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
}
