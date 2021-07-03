import {NavigationInterface} from "../interfaces/navigation.interface";

const content = require("../../data/navigation.json");

export const getNavigation = (slug: string): NavigationInterface => {
  // Slug isn't really required in this project but here is where I would use the slug to fetch the requested resource from the CMS/API/DB
  return content;
}
