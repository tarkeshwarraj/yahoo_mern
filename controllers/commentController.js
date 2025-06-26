import Comment from '../models/Comment.js';

export const allComments = async (req, res) => {
    res.render('admin/comments');
}

