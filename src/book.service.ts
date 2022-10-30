import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService{
  addBook():string{
    return "addBook";
  }

  deleteBook():string{
    return "deleteBook";
  }

  getBooks():string{
    return "getBooks";
  }

  updateBook(): string{
    return "updateBook";
  }
}