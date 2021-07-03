import express, {Request,Response} from "express";

export const navigationRouter = express.Router();

navigationRouter.get("/main", async (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello World navigation");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
