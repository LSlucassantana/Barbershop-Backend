import { IsString } from 'class-validator';

export class BarbeiroDTO {
  @IsString()
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  cpf: string;
}
