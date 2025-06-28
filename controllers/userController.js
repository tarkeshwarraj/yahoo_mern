import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const loginPage = (req, res) => {
    res.render('admin/login', { layout: false });
}

export const adminLogin = (req, res) => {
}       

export const logout = (req, res) => {
}

export const allUsers = async (req, res) => {
    const users = await User.find();
const formattedUsers = users.map(user => ({
  id: user._id, // MAPPED from _id
  fullname: user.fullname,
  username: user.username,
  role: user.role
}));

res.render("admin/users", { users: formattedUsers });

}

export const dashboard = (req, res) => {
    res.render('admin/dashboard');
}

export const settings = (req, res) => {
    res.render('admin/settings');
}

export const addUserPage = (req, res) => {
    res.render('admin/users/create');
}

export const addUser = async (req, res) => {
    await User.create(req.body);
    res.redirect('/admin/users');

}

export const updateUserPage = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if(!user){
            res.status(404).send('User not found');
        }
        res.render('admin/users/update', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { fullname, password, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id);
        if(!user){
            res.status(404).send('User not found');
        }

        user.fullname = fullname || user.fullname;
        if(password){
            user.password = await bcrypt.hash(password, 10);
        }
        user.role = role || user.role;
        await user.save();
        res.redirect('/admin/users');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}
