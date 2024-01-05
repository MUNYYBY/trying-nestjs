import { Controller, Get, Param } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll(): string {
    return 'cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return 'cats no: ' + id;
  }
}
