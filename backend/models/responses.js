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

User.hasMany(Response, { foreignKey: 'user_id'});
Response.belongsTo(User, { foreignKey: 'user_id'});
Comment.hasMany(Response, { foreignKey: 'comment_id'});
Response.belongsTo(Comment, { foreignKey: 'comment_id'});

module.exports = Response;