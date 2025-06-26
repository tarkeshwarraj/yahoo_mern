import Category from '../models/Category.js';


export const allCategory = async (req, res) => {
    res.render('admin/categories');

}

export const addCategoryPage = async (req, res) => {
    res.render('admin/categories/create');
}   

export const addCategory = async (req, res) => {

}   

export const updateCategoryPage = async (req, res) => {    
    res.render('admin/categories/update');
}       

export const updateCategory = async (req, res) => {    

}       

export const deleteCategory = async (req, res) => {
    
}
