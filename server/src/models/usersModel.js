const { DataTypes } = require('sequelize');
const myDatabase = require("../config/database");

    const User = myDatabase.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
            full_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
            email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
            password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
            role: {
            type: DataTypes.ENUM("user", "admin"),
            defaultValue: "user",
        },
            created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "users",   // important
        timestamps: false,    // because your table already has created_at
    }
    );

    module.exports = User;