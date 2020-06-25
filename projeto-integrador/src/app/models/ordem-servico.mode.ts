import { Tiposervico } from './tiposervico.model';
import { LaboratorioSala } from './laboratorio-sala.model';
import { Pessoa } from './pessoa.model';

export class OrdemServico {
    id: number;
    tiposervico: Tiposervico = new Tiposervico();
    laboratoriosala: LaboratorioSala = new LaboratorioSala();
    pessoafunc: Pessoa = new Pessoa();
    pessoacli: Pessoa = new Pessoa();
    dataemissao: Date;
    datafechamento: Date;
    status: string;
    descricao: string;
    local: string;
   
}

