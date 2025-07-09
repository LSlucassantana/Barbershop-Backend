import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ClienteDTO {
  @IsString()
  @MaxLength(100)
  nome: string;
  @IsDate()
  @Transform(({ value }) => new Date(`${value}T12:00:00`)) // Setando 12:00:00 para não ter problemas com o timezone
  dataNasc: Date;
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  telefone: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
}
