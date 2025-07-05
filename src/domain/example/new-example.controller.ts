import { Body, Controller, Inject, Post } from '@nestjs/common';
import { NewExampleDTO } from './dtos/new-example.dto';
import { ExampleService } from 'src/infra/database/services/example.service';

@Controller('/new-example')
export class ExampleController {
  constructor(
    @Inject(ExampleService)
    private readonly exampleService: ExampleService,
  ) {}

  @Post()
  async newExample(@Body() request: NewExampleDTO) {
    const result = await this.exampleService.newExample({
      nome: request.name,
    });
    return result;
  }
}
