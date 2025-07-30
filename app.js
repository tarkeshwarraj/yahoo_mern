import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import frontendRouter from './routes/frontend.js';
import adminRouter from './routes/admin.js';
dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(cookieParser());
app.use(expressLayouts);
app.set('layout', 'layout');

//View engine
app.set('view engine', 'ejs');

//Database
connectDB();

//Routes

app.use('/', frontendRouter);

app.use('/admin',(req,res,next)=>{
    res.locals.layout = 'admin/layout';
    next();
})
app.use('/admin', adminRouter)


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

