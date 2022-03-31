import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  Criar(): string {
    return 'POST';
  }

  @Put()
  Atualizar(): string {
    return 'Put';
  }

  @Delete()
  Delete(): string {
    return 'Delete';
  }
}
