import { Router } from 'express';
import ItemController from '@controllers/item.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/item';
  public router = Router();
  public itemController = new ItemController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.itemController.getItems);
    // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
