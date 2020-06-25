import { Tiposervico } from './tiposervico.model';
import { Historico } from './historico.model';
import { OrdemServico } from './ordem-servico.mode';
import { LaboratorioSala } from './laboratorio-sala.model';

export class Cliente {
    ordemservico: OrdemServico = new OrdemServico();
    tiposervico: Tiposervico = new Tiposervico();
    laboratoriosala: LaboratorioSala = new LaboratorioSala();
    historico: Historico = new Historico();
}
