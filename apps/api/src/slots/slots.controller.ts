import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { GenerateSlotsDto } from './dto/generate-slots.dto';
import { ListSlotsQueryDto } from './dto/list-slots.query.dto';
import { SlotsService } from './slots.service';

@Controller('slots')
export class SlotsController {
  constructor(private slots: SlotsService) {}

  @Public()
  @Get()
  findAll(@Query() query: ListSlotsQueryDto) {
    return this.slots.findAll(query);
  }

  @Roles('DONO')
  @Post()
  generate(@Body() dto: GenerateSlotsDto) {
    return this.slots.generate(dto);
  }
}
