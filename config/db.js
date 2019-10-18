const Sequelize = require('sequelize');

module.exports = new Sequelize('gigs', 'postgres', 'postgres', {
    host: 'database-2.ctxogvlvgzbq.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
  });