const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('table_users', {
    user_id: {},
    fist_name: {},
    last_name: {},
    email: {},
    password: {}
},{
    timestamps: true
})