import express from "express";
const router = express.Router();

import { loginPage, adminLogin, logout } from "../controllers/userController.js";
import { allUsers, addUserPage, addUser, updateUserPage, updateUser, deleteUser } from "../controllers/userController.js";
import { allCategory, addCategoryPage, addCategory, updateCategoryPage, updateCategory, deleteCategory } from "../controllers/categoryController.js";
import { allArticle, addArticlePage, addArticle, updateArticlePage, updateArticle, deleteArticle } from "../controllers/articleController.js";
import { allComments } from "../controllers/commentController.js";

//Login Routes
router.get("/", loginPage);
router.post("/index", adminLogin);
router.get("/logout", logout);


//User CRUD Routes
router.get('/users', allUsers);
router.get('/add-user', addUserPage);
router.post('/add-user', addUser);
router.get('/update-user/:id', updateUserPage);
router.post('/update-user/:id', updateUser);
router.get('/delete-user/:id', deleteUser);


//Category CRUD Routes
router.get('/category', allCategory);
router.get('/add-category', addCategoryPage);
router.post('/add-category', addCategory);
router.get('/update-category/:id', updateCategoryPage);
router.post('/update-category/:id', updateCategory);
router.get('/delete-category/:id', deleteCategory);


//Article CRUD Routes
router.get('/article', allArticle);
router.get('/add-article', addArticlePage);
router.post('/add-article', addArticle);
router.get('/update-article/:id', updateArticlePage);
router.post('/update-article/:id', updateArticle);
router.get('/delete-article/:id', deleteArticle);

//Comments Routes
router.get('/comments', allComments);



export default router;