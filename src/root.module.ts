import { Module } from '@nestjs/common';
import { BookController } from './app.controllers';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
}
