import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserMiddlerware } from './user.middlerware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: []
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddlerware).forRoutes('user');
  }
}
