const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Users');
const Comment = require('./comments');

const Response = sequelize.define("table_response", {
    response_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comment_id: { type: DataTypes.INTEGER, allowNull: false }, 
    user_id: { type: DataTypes.INTEGER, allowNull: false }, 
    content: { type: DataTypes.TEXT, allowNull: false },
}, {
    timestamp: true
})


module.exports = Response;