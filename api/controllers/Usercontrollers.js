import Users from "../models/UserModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const Register = async (req, res) => {
  const { username, email, password, password2 } = req.body;

  //   password match checking
  if (password !== password2) return res.status(400).json({ msg: "password does not match" });

  //   email exist checking
  const existEmail = await Users.findOne({ where: { username: username } });
  if (existEmail) return res.status(400).json({ msg: "Email  has been used" });

  // username exist checking
  const existUsername = await Users.findOne({ where: { email: email } });
  if (existUsername) return res.status(400).json({ msg: "Username has been used" });

  //   password encryption
  const salt = await bcrypt.genSalt();
  const HashPassword = await bcrypt.hash(password, salt);

  //  creating a new users
  try {
    await Users.create({ username: username, email: email, password: HashPassword });
    res.status(201).json({ msg: "Registration Success, Please Login" });
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email: email } });
  // email existance check
  if (!user) return res.status(403).json({ msg: "email doesnt exist" });

  // password match checking
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });

  const userId = user.id;
  const username = user.username;
  const emailData = user.email;
  const AccToken = user.password;

  const accessToken = jwt.sign({ userId, username, emailData }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20s",
  });
  const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  await Users.update({ refresh_token: refreshToken }, { where: { id: userId } });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json(accessToken);
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findOne({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user) return res.sendStatus(204);
  const userId = user.id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
export default { getUsers, Register, Login, Logout };
