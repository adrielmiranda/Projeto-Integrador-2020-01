import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { CadastroClienteService } from '../services/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  mens = '';

  constructor(private api: CadastroClienteService) { }
  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionar() {
    this.api.adicional(this.obj)
      .toPromise()
      .then(Pessoa => {
          this.mens = Pessoa.nome + " Foi adicionado(a) com sucesso!#seufela";
          alert("Foi adicionado(a) com sucesso!" + " Va para a tela de Login!")
          this.consultar();
      });
  }
  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(Pessoa => {
            this.mens= "Pessoa excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(Pessoa => {
                this.mens = Pessoa.id + "Alterado(a) com sucesso!#seufela";
          });
  }

}
