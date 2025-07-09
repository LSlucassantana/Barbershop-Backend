import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agendamento } from '../entities/agendamento.entity';
import { Repository } from 'typeorm';

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
  }) {
    const agendamento = this.agendamentoRepository.create({
      idCliente: dados.idCliente,
      idBarbeiro: dados.idBarbeiro,
      data: dados.data,
      hora: dados.hora,
      observacao: dados.observacao,
    });
    await this.agendamentoRepository.save(agendamento);
    return agendamento;
  }
}
