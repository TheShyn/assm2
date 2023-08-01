import express from "express";
import cors from "cors";
import connect from "./config/db";

const app = express();
app.use(cors());
app.use(express.json())
connect()

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
})

export const viteNodeApp = app;