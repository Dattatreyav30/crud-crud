const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Form = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time: {
        type: Sequelize.DATE,
        allowNull:false
    }
})

module.exports = Form;