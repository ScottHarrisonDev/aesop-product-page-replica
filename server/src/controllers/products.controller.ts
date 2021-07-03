import express, {Request,Response} from "express";
import * as ProductService from "../services/products.service";

export const productsRouter = express.Router();

productsRouter.get("/in-two-minds-facial-cleanser", async (req: Request, res: Response) => {
  try {
    const content = await ProductService.getProduct(req.route.path);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
