import Category from '../models/Category.js';
import News from '../models/News.js';
import User from '../models/User.js';

export const allArticle = async (req, res) => {
    res.render('admin/articles',{role: req.user.role});

}

export const addArticlePage = async (req, res) => {
    res.render('admin/articles/create',{role: req.user.role});
}

export const addArticle = async (req, res) => {

}       

export const updateArticlePage = async (req, res) => {    
    res.render('admin/articles/update',{role: req.user.role});
}   

export const updateArticle = async (req, res) => {     

}   

export const deleteArticle = async (req, res) => {     
    
}   
