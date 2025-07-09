import { IsString, MaxLength, MinLength } from 'class-validator';

export class BarbeiroDTO {
  @IsString()
  @MaxLength(100)
  nome: string;
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  telefone: string;
  @IsString()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
}
