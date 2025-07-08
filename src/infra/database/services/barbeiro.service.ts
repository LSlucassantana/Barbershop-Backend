import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barbeiro } from '../entities/barbeiro.entity';

@Injectable()
export class BarbeiroService {
  constructor(
    @InjectRepository(Barbeiro)
    private readonly barbeiroRepository: Repository<Barbeiro>,
  ) {}

  async newBarbeiro(dados: {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    cpf: string;
  }) {
    const barbeiro = this.barbeiroRepository.create({
      nome: dados.nome,
      telefone: dados.telefone,
      email: dados.email,
      senha: dados.senha,
      cpf: dados.cpf,
    });
    await this.barbeiroRepository.save(barbeiro);
    return barbeiro;
  }
}
