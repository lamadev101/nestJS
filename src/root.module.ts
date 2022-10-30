import { Module } from '@nestjs/common';
import { BookController } from './app.controllers';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
}
