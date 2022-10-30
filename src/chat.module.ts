import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [Feature3, AuthModule],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor(){
    console.log("Chat Module");
  }
}
