const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Project = sequelize.define("table_projects", {
    project_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: true},
    image: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamp: true
})

module.exports = Project;