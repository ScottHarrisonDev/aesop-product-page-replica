import express, {Request,Response} from "express";
import * as NavigationService from "../services/navigation.service";

export const navigationRouter = express.Router();

navigationRouter.get("/main", async (req: Request, res: Response) => {
  try {
    const content = await NavigationService.getNavigation(req.route.path);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
