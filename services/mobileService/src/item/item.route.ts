import express, { Request, Response } from "express";
    
const router = express.Router();

import ItemController from "./item.controller"

router.get('/', async (req: Request, res: Response): Promise<Response> => {
  const itemController: ItemController = new ItemController();

  return res.send(itemController.getItem());
});
   
  module.exports = router;