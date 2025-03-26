const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('table_users', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fist_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.TEXT, allowNull: false }
},{
    timestamps: true
})

module.exports = User;