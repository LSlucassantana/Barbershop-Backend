import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PagamentoService } from 'src/infra/database/services/pagamento.service';
import { PagamentoDTO } from './dtos/pagamento.dtos';

@Controller('/pagamento')
export class PagamentoController {
  constructor(
    @Inject(PagamentoService)
    private readonly pagamentoservice: PagamentoService,
  ) {}

  @Post()
  async newPagamento(@Body() request: PagamentoDTO) {
    const result = await this.pagamentoservice.newPagamento({
      idAgendamento: request.idAgendamento,
      valor: request.valor,
      formaPagamento: request.formaPagamento,
      dataPagamento: request.dataPagamento,
      observacao: request.observacao,
    });
    return result;
  }
}
