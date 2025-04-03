const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Service = sequelize.define('table_services', {
    service_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    image: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: true
})

module.exports = Service;