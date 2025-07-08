import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsString } from 'class-validator';

export class ClienteDTO {
  @IsString()
  nome: string;
  @IsDate()
  @Transform(({ value }) => new Date(`${value}T12:00:00`)) // Setando 12:00:00 para não ter problemas com o timezone
  dataNasc: Date;
  @IsString()
  telefone: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  cpf: string;
}
