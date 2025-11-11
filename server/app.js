import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import cookieParser from "cookie-parser";
import fileUpload from 'express-fileupload';
import { createTables } from './utils/createTables.js';
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import authRouter from './router/authRoutes.js';

const app = express();

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

app.use("/api/v1/auth", authRouter);


// Crear tablas y conectar a la DB
createTables();

app.use(errorMiddleware);


export default app;
