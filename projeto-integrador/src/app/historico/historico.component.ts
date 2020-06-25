import { Component, OnInit } from '@angular/core';
import { Historico } from '../models/historico.model';
import { HistoricoService } from '../serveces/historico.service';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../serveces/pessoa.service';
import { OrdemServicoService } from '../serveces/ordem-servico.service';
import { OrdemServico } from '../models/ordem-servico.mode';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  lista: Historico[] = [];
  obj: Historico = new Historico();
  listaPes: Pessoa [] = [];
  objPes: Pessoa;
  listaOs: OrdemServico [] = [];
  objOs: OrdemServico;
  mens = '';

  constructor(private api: HistoricoService, private apiPes: PessoaService, private apiOs: OrdemServicoService) { }

  ngOnInit(): void {
    this.consultar();
    this.consultarapiPes();
    this.consultarOs();
  }

  consultarOs(){
    this.apiOs.consultar()
    .toPromise()
    .then(res => {this.listaOs = res;});
  }

  consultarapiPes(){
    this.apiPes.consultar()
    .toPromise()
    .then(res => {this.listaPes = res;});
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionar() {
    this.api.adicional(this.obj)
      .toPromise()
      .then(historico => {
          this.mens = historico.id + " Foi adicionado(a) com sucesso!#seufela";
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(historico => {
            this.mens= historico.id + " excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(historico => {
                this.mens = historico.id + " Alterado(a) com sucesso!#seufela";
          });
  }

  carregarDados(H: Historico) {
    this.obj = H;

  }

 /* atribuiririr(id) {
    this.apiPes.atribuiririr(this.objPes)
   
  }

  atribuir(id) {
    this.obj.ordem.id = id;
     console.log(`OrdemServico: ${this.obj.ordem.id}`);
   }*/
}
