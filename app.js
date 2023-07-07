import express from "express";
import bookRoutes from "./routes/bookRoute.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
