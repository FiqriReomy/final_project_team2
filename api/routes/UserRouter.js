import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Usercontrollers.js";
import verifyToken from "../middleware/VerifyToken.js";
import refreshToken from "../controllers/RefreshToken.js";

const UserRouter = express.Router();

UserRouter.get("/users", verifyToken, getUsers);
UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.get("/token", refreshToken);
UserRouter.delete("/logout", Logout);

export default UserRouter;
