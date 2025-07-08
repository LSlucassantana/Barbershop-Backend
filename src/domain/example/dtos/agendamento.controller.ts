import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AgendamentoDTO } from './agendamento.dto';
import { AgendamentoService } from 'src/infra/database/services/agendamento.service';

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
