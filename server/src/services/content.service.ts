import {ContentInterface} from "../interfaces/content.interface";

const content = require("../../data/content.json");

export const getContent = (slug: string): ContentInterface => {
  // Slug isn't really required in this project but here is where I would use the slug to fetch the requested resource from the CMS/API/DB
  return content;
}
