import express, {Request,Response} from "express";

export const productsRouter = express.Router();

productsRouter.get("/in-two-minds-facial-cleanser", async (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello World products");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
