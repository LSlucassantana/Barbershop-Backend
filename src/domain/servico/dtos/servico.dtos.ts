import { IsNumber, IsString, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class ServicoDTO {
  @IsString()
  nome: string;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  preco: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  duracao: number;
}
