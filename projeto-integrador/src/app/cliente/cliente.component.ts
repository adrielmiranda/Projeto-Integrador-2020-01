import { Component, OnInit } from '@angular/core';

import { OrdemServico } from '../models/ordem-servico.mode';
import { ClienteService } from '../services/cliente.service';
import { Tiposervico } from '../models/tiposervico.model';
import { TiposervicoService } from '../serveces/tiposervico.service';
import { LaboratorioSala } from '../models/laboratorio-sala.model';
import { LaboratorioSalaService } from '../serveces/laboratorio-sala.service';
import { Historico } from '../models/historico.model';
import { HistoricoService } from '../serveces/historico.service';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../serveces/pessoa.service';
//import { LoginComponent } from '../login/login.component';
//import { Login } from '../models/login.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  lista: OrdemServico[] = [];
  obj: OrdemServico = new OrdemServico();
  listaTipo: Tiposervico[] = [];
  objTipo :Tiposervico = new Tiposervico;
  listaLab: LaboratorioSala[] = []; 
  objLab: LaboratorioSala = new LaboratorioSala;
  listaHis: Historico[] = []; 
  objHist: Historico = new Historico;
  listaPes: Pessoa [] = [];
  objPes: Pessoa;
  objPess: Pessoa;
  //listaLog: Login[] = []; 
  //objLog: Login = new Login;
  
 // list : List[]=[]; 
  mens = '';
  
  constructor(private api: ClienteService,
     private apiclass: TiposervicoService,
       private apiclassLab: LaboratorioSalaService,
       private apiHis: HistoricoService,
      private apiPes: PessoaService) { }
  
  ngOnInit(): void {
    this.consultar();
    this.consultarclass();
    this.consultarclassLab();
    this.consultarHis();
    this.consultarapiPes();
    this.consultarapiPess();
  }

  consultarapiPes(){
    this.apiPes.consultarPorPerfil('Cliente')
    .toPromise()
    .then(res => {this.objPes = res;});
  }

  consultarapiPess(){
    this.apiPes.consultarPorPerfil('Funcionario')
    .toPromise()
    .then(res => {this.objPess = res;});
  }

  consultarHis(){
    this.apiHis.consultar()
    .toPromise()
    .then(res => {this.listaHis = res;});
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
          this.addhistorico(OrdemServico,'I');
          //this.consultar();
      });
  }

  addhistorico(objOrd: OrdemServico, acao: string) {
    this.objHist = new Historico();
    //preencher os dados do obj
    this.objHist.data = objOrd.dataemissao;

    this.objHist.status = objOrd.status;
    this.objHist.ordem  = objOrd;
    
    this.objHist.pessoafun  = objOrd.pessoacli;

    //console.log("Objeto criado: " + JSON.stringify(this.objHist));
    
    this.apiHis.adicional(this.objHist).toPromise().then(res => { (res);});
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
                this.addhistorico(OrdemServico,'A');
          });
  }

  carregarDados(o: OrdemServico) {
    this.obj = o;
    this.obj.dataemissao = new Date(o.dataemissao);
  }

  atribuir(id) {
    this.obj.tiposervico.id = id;
     console.log(`Tiposervico: ${this.obj.tiposervico.id}`);
   }

   atribuirir(id) {
    this.obj.laboratoriosala.id = id;
     console.log(`LaboratorioSala: ${this.obj.laboratoriosala.id}`);
   }

   atri(id) {
    this.obj.pessoacli.id = id;
     console.log(`Pessoa: ${this.obj.pessoacli.id}`);
   }

   atria(id) {
    this.obj.pessoafunc.id = id;
     console.log(`Forma de Atendimento: ${this.obj.pessoafunc.id}`);
   }

  /* nome() {
     debugger
     //this.obj.pessoacli.id = id;
    this.comp.adicionarr();
    
     const ids = this.comp.idCli.push() ;
     //ids=this.objLog ;
     console.log(ids);
   }*/

}
