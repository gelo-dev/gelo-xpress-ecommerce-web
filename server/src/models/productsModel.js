const { DataTypes } = require('sequelize');
const myDatabase = require("../config/database");

const Product = myDatabase.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },

        image: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        
        public_id: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

    },
    {
        tableName: "products",   // matches your SQL table
        timestamps: false,       // because you already have created_at
    }
    );

module.exports = Product;
