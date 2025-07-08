import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClienteService } from 'src/infra/database/services/cliente.service';
import { ClienteDTO } from './cliente.dto';

@Controller('/cliente')
export class ClienteController {
  constructor(
    @Inject(ClienteService)
    private readonly clienteService: ClienteService,
  ) {}

  @Post()
  async newCliente(@Body() request: ClienteDTO) {
    const result = await this.clienteService.newCliente({
      nome: request.nome,
      dataNasc: request.dataNasc,
      telefone: request.telefone,
      email: request.email,
      senha: request.senha,
      cpf: request.cpf,
    });
    return result;
  }
}
