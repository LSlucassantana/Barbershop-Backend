import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agendamento } from '../entities/agendamento.entity';
import { Repository } from 'typeorm';
import { Opcao } from 'src/domain/agendamento/dtos/agendamento.dto';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
  ) {}

  async newAgendamento(dados: {
    idCliente: string;
    idBarbeiro: number;
    data: Date;
    hora: string;
    observacao: string;
    status: string;
  }) {
    const agendamento = this.agendamentoRepository.create({
      idCliente: dados.idCliente,
      idBarbeiro: dados.idBarbeiro,
      data: dados.data,
      hora: dados.hora,
      observacao: dados.observacao,
      status: Opcao[dados.status as keyof typeof Opcao],
    });
    await this.agendamentoRepository.save(agendamento);
    return agendamento;
  }
}
