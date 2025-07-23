import express from "express";
const router = express.Router();
import isLoggedin from "../middleware/isLoggedin.js";
import isAdmin from "../middleware/isAdmin.js";
import { loginPage, adminLogin, logout } from "../controllers/userController.js";
import { allUsers, addUserPage, addUser, updateUserPage, updateUser, deleteUser, dashboard, settings } from "../controllers/userController.js";
import { allCategory, addCategoryPage, addCategory, updateCategoryPage, updateCategory, deleteCategory } from "../controllers/categoryController.js";
import { allArticle, addArticlePage, addArticle, updateArticlePage, updateArticle, deleteArticle } from "../controllers/articleController.js";
import { allComments } from "../controllers/commentController.js";

//Login Routes
router.get("/", loginPage);
router.post("/index", adminLogin);
router.get("/logout", logout);
router.get("/dashboard",isLoggedin, dashboard); 
router.get("/settings",isLoggedin, isAdmin, settings); 


//User CRUD Routes
router.get('/users',isLoggedin,isAdmin, allUsers);
router.get('/add-user',isLoggedin,isAdmin, addUserPage);
router.post('/add-user',isLoggedin,isAdmin, addUser);
router.get('/update-user/:id',isLoggedin,isAdmin, updateUserPage);
router.post('/update-user/:id',isLoggedin,isAdmin, updateUser);
router.delete('/delete-user/:id',isLoggedin,isAdmin, deleteUser);


//Category CRUD Routes
router.get('/category',isLoggedin,isAdmin, allCategory);
router.get('/add-category',isLoggedin,isAdmin, addCategoryPage);
router.post('/add-category',isLoggedin,isAdmin, addCategory);
router.get('/update-category/:id',isLoggedin,isAdmin, updateCategoryPage);
router.post('/update-category/:id',isLoggedin,isAdmin, updateCategory);
router.delete('/delete-category/:id',isLoggedin,isAdmin, deleteCategory);


//Article CRUD Routes
router.get('/article',isLoggedin, allArticle);
router.get('/add-article',isLoggedin, addArticlePage);
router.post('/add-article',isLoggedin, addArticle);isLoggedin,
router.get('/update-article/:id',isLoggedin, updateArticlePage);
router.post('/update-article/:id',isLoggedin, updateArticle);
router.delete('/delete-article/:id',isLoggedin, deleteArticle);

//Comments Routes
router.get('/comments', allComments);



export default router;