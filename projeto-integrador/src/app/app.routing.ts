
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ModuleWithProviders } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AdminComponent } from './admin/admin.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { HistoricoComponent } from './historico/historico.component';
import { LaboratorioSalaComponent } from './laboratorio-sala/laboratorio-sala.component';
import { TiposervicoComponent } from './tiposervico/tiposervico.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { GuardaTela } from './guarda.tela';





const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cliente', component: ClienteComponent, canActivate:[GuardaTela]},
    { path: 'pessoa', component: CadastroClienteComponent},
    { path: 'admin', component: AdminComponent , canActivate:[GuardaTela]},
    { path: 'pessoa/fun', component: PessoaComponent , canActivate:[GuardaTela]},
    { path: 'historico', component: HistoricoComponent , canActivate:[GuardaTela]},
    { path: 'laboratorio-sala', component: LaboratorioSalaComponent , canActivate:[GuardaTela]},
    { path: 'tiposervico', component: TiposervicoComponent , canActivate:[GuardaTela]},
    { path: 'ordem-servico', component: OrdemServicoComponent , canActivate:[GuardaTela]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);