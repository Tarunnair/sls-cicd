'use strict';
const moment = require('moment');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless CICD DEMO',
        version: 'v3.0',
        timestamp: moment().unix()
      }),
  };
};
