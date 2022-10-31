import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAllUsers(): string{
    return 'findAllUsers';
  }

  @Post()
  addUser():string{
    return 'New user added successfully';
  }
}
