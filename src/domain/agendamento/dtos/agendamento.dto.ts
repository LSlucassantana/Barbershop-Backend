import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
export enum Opcao {
  agendado = 'Agendado',
  cancelado = 'Cancelado',
  Atendido = 'Atendido',
}

export class AgendamentoDTO {
  @IsNotEmpty()
  @IsString()
  idCliente: string;

  @IsNotEmpty()
  idBarbeiro: number;

  @IsDate()
  @Transform(({ value }) => new Date(`${value}T12:00:00`)) // Setando 12:00:00 para não ter problemas com o timezone
  data: Date;

  @IsString()
  hora: string;

  @IsOptional()
  @IsString()
  observacao: string;

  @IsOptional()
  @IsEnum(Opcao)
  status: Opcao; //string ou opcao
}
