import cors from "cors";
import express from "express";
import challenger_Router from "./routes/challenger_routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(challenger_Router);


export default app;