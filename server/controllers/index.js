var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS IS THE GET CONTROLLER MSG FUNCTION');      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('THIS IS THE POST CONTROLLER MSG FUNCTION');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('THIS IS THE GET CONTROLLER USR FUNCTION');
      console.log('USER REQUEST', req);      
    },
    post: function (req, res) {
      console.log('THIS IS THE POST CONTROLLER USR FUNCTION'); 
      console.log('REQUEST BODY', req.body);
      
    }
  }
};

