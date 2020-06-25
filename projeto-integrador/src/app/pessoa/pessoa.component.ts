import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../serveces/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  mens = '';

  constructor(private api: PessoaService) { }

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
      .then(pessoa => {
          this.mens = `${pessoa.nome} Foi adicionado(a) com sucesso!#seufela`;
          this.consultar();
      });
  }

  excluir() {
    
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(Pessoa => {
          
            this.mens=  " excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(pessoa => {
                this.mens = pessoa.nome + " Alterado(a) com sucesso!#seufela";
          });
  }

  carregarDados(p: Pessoa) {
    this.obj = p;
  }

}
