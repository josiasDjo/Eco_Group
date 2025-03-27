const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Objectif = sequelize.define("table_objectifs", {
    objectif_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
}, {
    timestamp: true
})

module.exports = Objectif;