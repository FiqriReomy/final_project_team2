import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ProductRoute from "./routes/ProductRoute.js";
import UserRouter from "./routes/UserRouter.js";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(
  FileUpload({
    limits: 1000000,
    abortOnLimit: true,
  })
);
app.use(express.static("public"));
app.use(ProductRoute);
app.use(UserRouter);

// server and database connection check
app.listen(5000, async (req, res) => {
  try {
    await db.authenticate();
    console.log("Database Connected ....");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server up and running on port 5000...`);
});
