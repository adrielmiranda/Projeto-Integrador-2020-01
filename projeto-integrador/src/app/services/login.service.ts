import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError} from 'rxjs/operators';

const url = 'http://localhost:8088/login';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginAutenticado: boolean = false;
 // lista: Pessoa[] = [];
 // obj: Pessoa = new Pessoa();

  constructor(private http: HttpClient,private router: Router) { }

  adicional (Login): Observable<Login> {

    return this.http.post<Login>(url,Login,httpOptions)
  }
  
  fazerLogin(usuario: string, senha: string): Observable<Login>  {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    return this.http.post<Login>(url,Login,httpOptions)
    }
    loginEstaAutenticado(){
      return this.loginAutenticado;
      
    }


 /*FazerLogin( login: Login){
   this.adicional(login);
  var i = 0;
  //var l = Object.getOwnPropertyNames(pessoa.login).length;
  var l = 2;
  /*for (; i < l; i++) {
    if(login.usuario === pessoa.login && login.senha === pessoa.senha ){

      this.loginAtutenticado = true;
      this.router.navigate(['/cliente']);

    }if(login.usuario === pessoa.login && login.senha === pessoa.senha && pessoa.perfil === 'Funcionario'){

      this.loginAtutenticado = true;
      this.router.navigate(['/admin']);
    }
    else{
      this.loginAtutenticado = false;
      alert("Usuario ou senha invalido");
    }
  }*/
 /*if(login.usuario === 'Admin' && login.senha === 'admin'){
    this.loginAutenticado = true;
    this.router.navigate(['/admin']);
    }
    else if(login.usuario === 'Cliente' && login.senha === 'master'){
      this.loginAutenticado = true;
      this.router.navigate(['/cliente']);
    }else{
      this.loginAutenticado = false;
      alert("Usuario ou senha invalido");
    }

  }*/

  
  
}
