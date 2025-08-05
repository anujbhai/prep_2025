import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// Make available everywhere
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsModule]
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
