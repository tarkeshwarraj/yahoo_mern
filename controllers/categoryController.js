import Category from '../models/Category.js';


export const allCategory = async (req, res) => {
    res.render('admin/categories',{role: req.user.role});

}

export const addCategoryPage = async (req, res) => {
    res.render('admin/categories/create',{role: req.user.role});
}   

export const addCategory = async (req, res) => {

}   

export const updateCategoryPage = async (req, res) => {    
    res.render('admin/categories/update',{role: req.user.role});
}       

export const updateCategory = async (req, res) => {    

}       

export const deleteCategory = async (req, res) => {
    
}
