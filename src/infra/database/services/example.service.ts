import { InjectRepository } from '@nestjs/typeorm';
import { Example } from '../entities/example.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  async newExample(dados: { nome: string }) {
    const example = this.exampleRepository.create({ nome: dados.nome });
    await this.exampleRepository.save(example);
    return example;
  }
}
