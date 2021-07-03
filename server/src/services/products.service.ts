import {ProductInterface} from "../interfaces/product.interface";

const content = require("../../data/product.json");

export const getProduct = (slug: string): ProductInterface => {
  // Slug isn't really required in this project but here is where I would use the slug to fetch the requested resource from the CMS/API/DB
  return content;
}
