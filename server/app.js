import express from 'express';
/*import { config } from 'dotenv';*/ // revisar para dejarlo o quiarlo
import cors from 'cors';
import cookieParser from "cookie-parser";
import fileUpload from 'express-fileupload';
import { createTables } from './utils/createTables.js';
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

/*config({path: "./config/config.env"});*/  // revisar para dejarlo o quiarlo

app.use(cors({
		origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		credentials: true,
	})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(fileUpload({
		tempFileDir: "./uploads/",
		useTempFiles: true,
	})
);

// Crear tablas y conectar a la DB
createTables();

app.use(errorMiddleware);


export default app;
