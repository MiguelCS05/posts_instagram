import express from "express";
import postRoutes from "./routes/post.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});