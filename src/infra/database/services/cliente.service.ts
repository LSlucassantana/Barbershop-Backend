import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async newCliente(dados: {
    nome: string;
    dataNasc: Date;
    telefone: string;
    email: string;
    senha: string;
    cpf: string;
  }) {
    const cliente = this.clienteRepository.create({
      nome: dados.nome,
      dataNasc: dados.dataNasc,
      telefone: dados.telefone,
      email: dados.email,
      senha: dados.senha,
      cpf: dados.cpf,
    });
    await this.clienteRepository.save(cliente);
    return cliente;
  }
}
