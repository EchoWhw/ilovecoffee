import { Injectable, Module } from '@nestjs/common';
import { CoffeesService } from '../-coffees/-coffees.service';

@Module({
  imports: [CoffeesService],
})
@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeesService: CoffeesService) {}
}
