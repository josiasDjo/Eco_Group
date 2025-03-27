const { DataTypes }= require('sequelize');
const sequelize = require('./index');

const Mission = sequelize.define("table_missions", {
    mission_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },	
}, {
    timestamps: true
})

module.exports = Mission;