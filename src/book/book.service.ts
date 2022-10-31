import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService{
  public books: Book[] = [];

  // add book
  addBookService(book:Book):string {
    // id auto generated
    book.id = uuidv4();
    this.books.push(book);
    return "Added Successfully";
  }

  // update book
  updateBookService(book:Book):string {
    let index = this.books.findIndex((currentBook)=>{
      return currentBook.id === book.id;
    });
    this.books[index] = book;
    return "Book has been successfully updated";
  }

  // delete book
  deleteBookService(id:string):string {
    this.books = this.books.filter(book => book.id !== id);
    return "Book has been deleted";
  }

  // get all books
  getAllBooksService():Book[] {
    return this.books;
  }
}