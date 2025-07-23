import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isLoggedin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

export default isLoggedin;