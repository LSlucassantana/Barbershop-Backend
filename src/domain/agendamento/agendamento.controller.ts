import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AgendamentoService } from 'src/infra/database/services/agendamento.service';
import { AgendamentoDTO } from './agendamento.dto';

@Controller('/agendamento')
export class AgendamentoController {
  constructor(
    @Inject(AgendamentoService)
    private readonly agendamentoservice: AgendamentoService,
  ) {}

  @Post()
  async newAgendamento(@Body() request: AgendamentoDTO) {
    const result = await this.agendamentoservice.newAgendamento({
      data: request.data,
      hora: request.hora,
      observacao: request.observacao,
    });
    return result;
  }
}
