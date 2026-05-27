import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { BusinessesService } from './businesses.service';

@Controller('businesses')
export class BusinessesController {
  constructor(private businesses: BusinessesService) {}

  @Public()
  @Get()
  findAll() {
    return this.businesses.findAll();
  }
}
