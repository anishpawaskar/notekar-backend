import express, { json } from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(json());
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
