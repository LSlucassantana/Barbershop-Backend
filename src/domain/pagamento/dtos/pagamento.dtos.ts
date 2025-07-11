import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
export enum Opcao2 {
  pix = 'Pix',
  cartao = 'Cartão',
  dinheiro = 'Dinheiro',
}

export class PagamentoDTO {
  @IsNumber()
  idAgendamento: number;
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  valor: number;
  @IsEnum(Opcao2)
  formaPagamento: string;
  @IsDate()
  @Transform(({ value }) => new Date(`${value}T12:00:00`)) // Setando 12:00:00 para não ter problemas com o timezone
  dataPagamento: Date;
  @IsOptional()
  @IsString()
  observacao: string;
}
