import { Router } from "express";
import indexPage from "./pages/index";

export const router = Router()
  .get("/", indexPage)
  .get("/about", (req, res) => res.send("About page"))
  .get("/services", (req, res) => res.send("Services page"))
  .get("/contact-us", (req, res) => res.send("Contact page"));

