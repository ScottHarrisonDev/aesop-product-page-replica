import express, {Request,Response} from "express";

export const contentRouter = express.Router();

contentRouter.get("/product-page", async (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello World content");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
