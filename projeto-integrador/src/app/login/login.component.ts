import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../serveces/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  listaLog: Login[] = [];
  objLog: Login = new Login();
  mens = '';
  loading: boolean;
  token: string;
  loginAtutenticado: boolean;
  idCli:[];
  // login: Login = new Login();

  constructor(private apiLog: LoginService, private api: PessoaService,private router: Router) { }

  ngOnInit(): void {
    this.consultar();
  }
  
  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionarr() {
    this.apiLog.adicional(this.objLog)
      .toPromise()
      .then(Login => {
        
       // Object[Array.length] = Login;
      //Login[Array.length];
      var array = Login[0];
      if(array === undefined){
        this.apiLog.loginAutenticado = false;
            alert("Usuario ou senha invalido");
      }else{
        var deta = array[2];
        var idCli = array[0];
        var nomeCli = array[1];
      }

  
    
        if( deta == 'Funcionario'){
        
          this.apiLog.loginAutenticado = true;
          
          this.router.navigate(['/admin']);
          }else if( deta == 'Cliente'){
            this.apiLog.loginAutenticado = true;
            this.router.navigate(['/cliente']);
           
          }else if(deta == undefined) {
            this.apiLog.loginAutenticado = false;
            alert("Usuario ou senha invalido");
          }
      
         
        console.log(Login)
        
      })
    }
    
  FazerLogin(){
    debugger
    //console.log(this.login);
   // this.apiLog.FazerLogin(this.objLog)
    this.apiLog.adicional(this.objLog).subscribe((response) => {
    let array = response.usuario
    if(array != null){
      debugger
      this.loginAtutenticado = true;
      this.apiLog.loginEstaAutenticado();
      this.router.navigate(['/admin']);
      }else if(array == null){
       debugger
        this.loginAtutenticado = false;
       alert("Usuario ou senha invalido");
      }
    },)
  }


  fazrLogin(usuario: string, senha: string): void{
    this.loading = true;
    this.apiLog.fazerLogin(usuario,senha).subscribe((response) => {
          // aqui você faz o seu processamento, acessando data e status do objeto declarado acima.

         let data = response.usuario;
         let statusCode = response.senha;

         if(data == null){ //se o retorno da requisição for null, aciona a função que exibe o toast
             // this.toastUsuarioIncorreto();
              this.apiLog.loginEstaAutenticado();
              this.loading = false;
              alert("Usuario ou senha invalido");
              
            }else{ //emite para o serviço que o usuário foi autenticado e que pode acessar as rotas do guard, redireciona para a home
              
              this.apiLog.loginEstaAutenticado();
              this.loading = true;
              let token = JSON.stringify(data); //aqui é recebido o id do usuário
              this.token = token; //aqui passa o valor do id do usuário para a variável do componente
              localStorage.setItem('currentUser', this.token);
             
      }
    },
  );
}


}
