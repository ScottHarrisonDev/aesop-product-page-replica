import express, {Request,Response} from "express";
import * as ContentService from "../services/content.service";

export const contentRouter = express.Router();

contentRouter.get("/product-page", async (req: Request, res: Response) => {
  try {
    const content = await ContentService.getContent(req.route.path);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
