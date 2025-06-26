import User from '../models/User.js';

export const loginPage = (req, res) => {
    res.render('admin/login', { layout: false });
}

export const adminLogin = (req, res) => {
}       

export const logout = (req, res) => {
}

export const allUsers = (req, res) => {
    res.render('admin/users');

}

export const dashboard = (req, res) => {
    res.render('admin/dashboard');
}

export const settings = (req, res) => {
    res.render('admin/settings');
}

export const addUserPage = (req, res) => {
}

export const addUser = (req, res) => {
    res.render('admin/users/create');

}

export const updateUserPage = (req, res) => {
    res.render('admin/users/update');

}

export const updateUser = (req, res) => {
}

export const deleteUser = (req, res) => {
}
