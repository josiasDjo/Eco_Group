const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('table_users', {

},{
    timestamps: true
})