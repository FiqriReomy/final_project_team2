import Sequelize from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

export const Product = db.define(
  "product",
  {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    desc: DataTypes.STRING,
    qty: DataTypes.STRING,
    kategori: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Product;
