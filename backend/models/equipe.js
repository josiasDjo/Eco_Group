const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Equipe = sequelize.define("table_equipes", {
    equipe_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false }, 
    last_name: { type: DataTypes.STRING, allowNull: false }, 
    image: { type: DataTypes.TEXT, allowNull: false },
}, {
    timestamp: true
})

module.exports = Equipe;