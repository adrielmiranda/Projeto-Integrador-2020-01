import { OrdemServico } from './ordem-servico.mode';
import { Pessoa } from './pessoa.model';

export class Historico {
    id: number;
    ordem: OrdemServico = new OrdemServico();
    pessoafun: Pessoa = new Pessoa();
    data: Date;
    status: string;
}
