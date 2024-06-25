import { Router } from "express";

import addArticle from "../controllers/articleController/addArticle.js";
import updateArticle from "../controllers/articleController/updateArticle.js";
import deleteArticles from "../controllers/articleController/deleteArticles.js";
import getArticles from "../controllers/articleController/getArticles.js";
import getAllArticles from "../controllers/articleController/getAllArticles.js";
import adminAuthentication from "../middlewares/AdminAuthentication.js";

const articleRoute = Router();

articleRoute.post("/", adminAuthentication, addArticle);
articleRoute.put("/", adminAuthentication, updateArticle);
articleRoute.delete("/", adminAuthentication, deleteArticles);
articleRoute.get("/", getArticles);
articleRoute.get("/all", adminAuthentication, getAllArticles);

export default articleRoute;
