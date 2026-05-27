import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateServiceDto } from './dto/create-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private services: ServicesService) {}

  @Public()
  @Get()
  findAll(@Query('businessId') businessId?: string) {
    return this.services.findAll(businessId);
  }

  @Roles('DONO')
  @Post()
  create(@Body() dto: CreateServiceDto) {
    return this.services.create(dto);
  }

  @Roles('DONO')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.services.remove(id);
  }
}
