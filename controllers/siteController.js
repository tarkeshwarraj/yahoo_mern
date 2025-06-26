import mongoose from "mongoose";
import Category from '../models/Category.js';
import News from '../models/News.js';
import User from '../models/User.js';
import Comment from '../models/Comment.js';


export const index = async (req, res) => {
    res.render('index');
}

export const articleByCategory = async (req, res) => {
    res.render('category');
}

export const singleArticle = async (req, res) => {
    res.render('single');
}

export const search = async (req, res) => {
    res.render('search');
}

export const author = async (req, res) => {
    res.render('author');
}

export const addComment = async (req, res) => {
}
