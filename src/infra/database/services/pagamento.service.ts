import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Opcao2 } from 'src/domain/pagamento/dtos/pagamento.dtos';
import { Repository } from 'typeorm';
import { Pagamento } from '../entities/pagemento.entity';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private readonly pagamentoRepository: Repository<Pagamento>,
  ) {}

  async newPagamento(dados: {
    idAgendamento: number;
    valor: number;
    formaPagamento: string;
    dataPagamento: Date;
    observacao: string;
  }) {
    const pagamento = this.pagamentoRepository.create({
      idAgendamento: dados.idAgendamento,
      valor: dados.valor,
      formaPagamento: Opcao2[dados.formaPagamento as keyof typeof Opcao2],
      dataPagamento: dados.dataPagamento,
      observacao: dados.observacao,
    });
    await this.pagamentoRepository.save(pagamento);
    return pagamento;
  }
}
