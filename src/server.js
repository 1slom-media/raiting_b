import express from 'express'
import cors from 'cors'
import morgan from "morgan";
import { PORT } from "./config.js";
import modules from "./modules/index.js";
import errorHandler from "./utils/error-handler.js";

const app=express();
app.use(express.json());
app.use(cors());
app.use(modules);
app.use(errorHandler)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.listen(PORT , ()=>console.log(`server ready at http://localhost:${PORT}`))