var db = require('../db');

module.exports = {
  messages: {
    get: function (params) {
      console.log('THIS IS THE GET MODEL MSG FUNCTION');
    }, // a function which produces all the messages
    post: function (message) {
      console.log('THIS IS THE POST MODEL MSG FUNCTION');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (params) {},
    post: function (message) {
    }
  }
};

