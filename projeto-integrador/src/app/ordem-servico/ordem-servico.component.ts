import { Component, OnInit } from '@angular/core';
import { OrdemServico } from '../models/ordem-servico.mode';
import { OrdemServicoService } from '../serveces/ordem-servico.service';
import { Tiposervico } from '../models/tiposervico.model';
import { LaboratorioSala } from '../models/laboratorio-sala.model';
import { TiposervicoService } from '../serveces/tiposervico.service';
import { LaboratorioSalaService } from '../serveces/laboratorio-sala.service';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../serveces/pessoa.service';
import { Historico } from '../models/historico.model';
import { HistoricoService } from '../serveces/historico.service';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent implements OnInit {
  lista: OrdemServico[] = [];
  obj: OrdemServico = new OrdemServico();
  listaTipo: Tiposervico[] = [];
  objTipo :Tiposervico;
  listaLab: LaboratorioSala[] = []; 
  objLab: LaboratorioSala;
  listaPes: Pessoa [] = [];
  objPes: Pessoa;
  listaPess: Pessoa [] = [];
  objPess: Pessoa;
  objHist: Historico;
  mens = '';
  

  constructor(private api: OrdemServicoService,
     private apiclass: TiposervicoService,
       private apiclassLab: LaboratorioSalaService,
       private apiPes: PessoaService,
       private apiHis: HistoricoService ) { }

  ngOnInit(): void {
    this.consultar();
    this.consultarclass();
    this.consultarclassLab();
    this.consultarapiPes();
    this.consultarapiPess();
  }

  consultarapiPess(){
    this.apiPes.consutarPorPerfil('Funcionario')
    .toPromise()
    .then(res => {this.objPess = res;});
  }

  consultarapiPes(){
    this.apiPes.consultarPorPerfil('Cliente')
    .toPromise()
    .then(res => {this.objPes = res;});
  }

  consultarclass(){
    this.apiclass.consultar()
    .toPromise()
    .then(res => {this.listaTipo = res;});
  }

  consultarclassLab(){
    this.apiclassLab.consultar()
    .toPromise()
    .then(res => {this.listaLab = res;});
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionar() {
    this.api.adicional(this.obj)
      .toPromise()
      .then(OrdemServico => {
          this.mens = OrdemServico.id + "Foi adicionado(a) com sucesso!#seufela";
          this.consultar();
          this.addhistorico(OrdemServico,'I');
      });
  }


  addhistorico(objOrd: OrdemServico, acao: string) {
    this.objHist = new Historico();
    //preencher os dados do obj
    this.objHist.data = objOrd.datafechamento;

    this.objHist.status = objOrd.status;
    this.objHist.ordem  = objOrd;
    this.objHist.pessoafun  = objOrd.pessoafunc;
    

    console.log("Objeto criado: " + JSON.stringify(this.objHist));
    
    this.apiHis.adicional(this.objHist).toPromise().then(res => { console.log("Objeto adicionado: " + JSON.stringify(res));});
    this.consultar();
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(OrdemServico => {
            this.mens= "OrdemServico excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(OrdemServico => {
                this.mens = OrdemServico.id + "Alterado(a) com sucesso!#seufela";
                //this.consultar();
                 this.addhistorico(OrdemServico,'A');
          });
  }

  carregarDados(o: OrdemServico) {
    this.obj = o;
    this.obj.dataemissao = new Date(o.dataemissao)
    this.obj.datafechamento = new Date(o.datafechamento)
  }

 /* atribuiririr(id) {
    this.apiPes.atribuiririr(this.objPess)
   
  }*/

  atribuiririr(id) {
    this.obj.pessoafunc.id = id;
     console.log(`Pessoa: ${this.obj.pessoafunc.id}`);
   }

   atri(id) {
    this.obj.pessoacli.id = id;
     console.log(`Pessoa: ${this.obj.pessoacli.id}`);
   }

  atribuir(id) {
    this.obj.tiposervico.id = id;
     console.log(`Tiposervico: ${this.obj.tiposervico.id}`);
   }

   atribuirir(id) {
    this.obj.laboratoriosala.id = id;
     console.log(`LaboratorioSala: ${this.obj.laboratoriosala.id}`);
   }

}
