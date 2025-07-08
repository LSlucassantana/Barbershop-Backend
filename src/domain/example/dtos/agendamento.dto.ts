import { Transform } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class AgendamentoDTO {
  @IsDate()
  @Transform(({ value }) => new Date(`${value}T12:00:00`)) // Setando 12:00:00 para não ter problemas com o timezone
  data: Date;

  @IsString()
  hora: string;
  observacao: string;
}
