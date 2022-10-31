import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class UserMiddlerware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction){
    let protocol = req.protocol; //http, https
    let host = req.get("host"); // localhost
    let method = req.method; //GET, POST, PUT, DELETE, etc.
    let url = req.originalUrl;
    let ip = req.ip;
    let date = new Date().toDateString();

    console.log(protocol + "://" + host + url + " " + ip + " " + method + " " + date)
  }
}