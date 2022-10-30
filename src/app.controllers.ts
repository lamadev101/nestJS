import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('book')
export class BookController{
  // add book
  @Post('/add')
  addBook():string{
    return "addBook";
  }

  // delete book
  @Delete('/delete')
  deleteBook(): string{
    return "deleteBook";
  }

  // update book
  @Put('/update')
  updateBook(): string{
    return "updateBook";
  }

  // get all books
  @Get('/all')
  getAllBooks(): string{
    return "getAllBooks";
  }

  // get book by id
  @Get('/findBookById/:id')
  findBookById(@Param() params):string{
    console.log(params.id);
    return `findBookById id is ${params.id}`;
  }
}