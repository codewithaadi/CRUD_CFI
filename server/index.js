import express  from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);

const username = "user";
const password = "user123";
const PORT= 8000;


Connection(username,password);

app.listen(PORT,()=> console.log(`!!! Server is running succesfully on ${PORT}`));
