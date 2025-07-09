import { Body, Controller, Inject, Post } from '@nestjs/common';
import { BarbeiroService } from 'src/infra/database/services/barbeiro.service';
import { BarbeiroDTO } from './dtos/barbeiro.dto';

@Controller('/barbeiro')
export class BarbeiroController {
  constructor(
    @Inject(BarbeiroService)
    private readonly barbeiroService: BarbeiroService,
  ) {}

  @Post()
  async newBarbeiro(@Body() request: BarbeiroDTO) {
    const result = await this.barbeiroService.newBarbeiro({
      nome: request.nome,
      telefone: request.telefone,
      email: request.email,
      senha: request.senha,
      cpf: request.cpf,
    });
    return result;
  }
}
