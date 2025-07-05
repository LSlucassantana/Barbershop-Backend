import { IsString } from 'class-validator';

export class NewExampleDTO {
  @IsString()
  name: string;
}
