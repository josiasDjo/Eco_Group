const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Comment = sequelize.define("table_comments", {
    comment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },	
    author: { type: DataTypes.STRING, allowNull: false }, 	
    content: { type: DataTypes.TEXT, allowNull: false }, 	
    statut: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamp: true
})

module.exports = Comment;