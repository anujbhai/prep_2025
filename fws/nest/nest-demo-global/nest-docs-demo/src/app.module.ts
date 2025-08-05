import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './cats/middleware/logger/logger/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // module class' 'configure' method for including middleware in modules (not available in @Module decorator) 
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({path: 'cats', method: RequestMethod.GET}); // restrict to a particular request (using 'RequestMethod' enum)
      .forRoutes(CatsController); // single controller example
  }
}
