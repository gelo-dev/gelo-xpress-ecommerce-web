const { DataTypes } = require('sequelize');
const myDatabase = require("../config/database");

const Category = myDatabase.define(
    "Category",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
            name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "categories",
        timestamps: false,
    }
    );

module.exports = Category;
