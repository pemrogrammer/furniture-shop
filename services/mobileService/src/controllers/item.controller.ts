import { NextFunction, Request, Response } from 'express';

class ItemController {

  public getItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: string = "item controller"

      res.status(200).json({ data: data, message: 'Success, get item' });
    } catch (error) {
      next(error)
    }
  }

}

export default ItemController;
