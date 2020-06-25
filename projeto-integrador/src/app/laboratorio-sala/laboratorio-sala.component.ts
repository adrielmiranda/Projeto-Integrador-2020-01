import { Component, OnInit } from '@angular/core';
import { LaboratorioSala } from '../models/laboratorio-sala.model';
import { LaboratorioSalaService } from '../serveces/laboratorio-sala.service';

@Component({
  selector: 'app-laboratorio-sala',
  templateUrl: './laboratorio-sala.component.html',
  styleUrls: ['./laboratorio-sala.component.css']
})
export class LaboratorioSalaComponent implements OnInit {
  lista: LaboratorioSala[] = [];
  obj: LaboratorioSala = new LaboratorioSala();
  mens = '';

  constructor(private api: LaboratorioSalaService) { }

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
      .then(LaboratorioSala => {
          this.mens = LaboratorioSala.id + "Foi adicionado(a) com sucesso!#seufela";
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(LaboratorioSala => {
            this.mens= "LaboratorioSala excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(LaboratorioSala => {
                this.mens = LaboratorioSala.id + "Alterado(a) com sucesso!#seufela";
          });
  }

  carregarDados(l: LaboratorioSala) {
    this.obj = l;
  }

}