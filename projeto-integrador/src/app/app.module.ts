import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiposervicoComponent } from './tiposervico/tiposervico.component';
import { TiposervicoService } from './serveces/tiposervico.service';
import { LaboratorioSalaService } from './serveces/laboratorio-sala.service';
import { LaboratorioSalaComponent } from './laboratorio-sala/laboratorio-sala.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './serveces/pessoa.service';
import { OrdemServicoService } from './serveces/ordem-servico.service';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { HistoricoComponent } from './historico/historico.component';
import { HistoricoService } from './serveces/historico.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { routing } from './app.routing';
import { ClienteService } from './services/cliente.service';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroClienteService } from './services/cadastro-cliente.service';
//PrimeNG
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './services/login.service';
import { GuardaTela } from './guarda.tela';


@NgModule({
  declarations: [
    AppComponent,
    TiposervicoComponent,
    LaboratorioSalaComponent,
    PessoaComponent,
    OrdemServicoComponent,
    HistoricoComponent,
    HomeComponent,
    LoginComponent,
    ClienteComponent,
    CadastroClienteComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //Programa
    routing,
    //PrimeNG
    CalendarModule,
    BrowserAnimationsModule
  ],
 /* providers: [TiposervicoService,LaboratorioSalaService,
    PessoaService,OrdemServicoService,
    HistoricoService,ClienteService,
    CadastroClienteService,LoginService,GuardaTela],*/
    providers: [LoginService,GuardaTela],
   bootstrap: [AppComponent]
})
export class AppModule { }
