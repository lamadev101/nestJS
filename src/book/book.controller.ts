import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('book')
export class BookController{
  @Get()
  findAllBooks():string{
    return "findAllBooks";
  }

  @Post()
  addBook():string{
    return "addBook";
  }
}