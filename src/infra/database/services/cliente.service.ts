import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { BadRequestException, Injectable } from '@nestjs/common';

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
    const clienteExistente = await this.clienteRepository.findOneBy({
      cpf: dados.cpf,
    });
    if (clienteExistente) {
      throw new BadRequestException('CPF já está cadastrado.');
    }
    const emailExistente = await this.clienteRepository.findOneBy({
      email: dados.email,
    });
    if (emailExistente) {
      throw new BadRequestException('Email já está cadastrado.');
    }
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
