import { Component, OnInit } from '@angular/core';
import { TiposervicoService } from '../serveces/tiposervico.service';
import { Tiposervico } from '../models/tiposervico.model';

@Component({
  selector: 'app-tiposervico',
  templateUrl: './tiposervico.component.html',
  styleUrls: ['./tiposervico.component.css']
})
export class TiposervicoComponent implements OnInit {

  lista: Tiposervico[] = [];
  obj: Tiposervico = new Tiposervico();
  mens = '';

  constructor(private api: TiposervicoService) { }

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
      .then(tiposervico => {
          this.mens = tiposervico.descricao + " Foi adicionado(a) com sucesso!#seufela";
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(tiposervico => {
          this.mens=  " excluido com sucesso!#seufela";
          this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(tiposervico => {
                this.mens = tiposervico.descricao + " Alterado(a) com sucesso!#seufela";
          });
  }

  carregarDados(t: Tiposervico) {
    this.obj = t;
  }

}
