import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ServicoService } from 'src/infra/database/services/servico.service';
import { ServicoDTO } from './dtos/servico.dtos';

@Controller('/servico')
export class ServicoController {
  constructor(
    @Inject(ServicoService)
    private readonly servicoService: ServicoService,
  ) {}

  @Post()
  async newServico(@Body() request: ServicoDTO) {
    const result = await this.servicoService.newServico({
      nome: request.nome,
      preco: request.preco,
      duracao: request.duracao,
    });
    return result;
  }
}
