import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from '../entities/servico.entity';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async newServico(dados: { nome: string; preco: number; duracao: number }) {
    const servvico = this.servicoRepository.create({
      nome: dados.nome,
      preco: dados.preco,
      duracao: dados.duracao,
    });
    await this.servicoRepository.save(servvico);
    return servvico;
  }
}
