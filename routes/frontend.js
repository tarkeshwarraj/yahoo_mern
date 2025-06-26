import express from "express";
const router = express.Router();

import { index, articleByCategory, singleArticle, search, author, addComment } from "../controllers/siteController.js";



router.get("/", index);
router.get("/category/:name", articleByCategory);
router.get("/single/:id", singleArticle);
router.get("/search", search);
router.get("/author/:name", author);
router.get("/single/:id", addComment);

export default router;