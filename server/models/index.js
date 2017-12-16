var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS IS THE GET MODEL MSG FUNCTION');
      let sql = 'SELECT * FROM messages m INNER JOIN Users u ON m.UserID = u.UserID INNER JOIN Rooms r ON m.RoomID = r.RoomId';
      db.query(sql, [], function(err, results) {
        if (err) { throw err; }
        res.json({results});
      });
    },
    post: function (req) {
      console.log('body: ', req);
      
      var sql = `SELECT RoomID FROM rooms WHERE roomname = ('${req.roomname}')`;
      db.query(sql, [], function(err, results) {
        if (err) { throw err; }
        if (results.length === 0) {
          sql = `INSERT INTO rooms (roomname) VALUE ("${req.roomname}")`;
          db.query(sql, [], function(err, results) {
            if (err) { throw err; }
            console.log('roomname added');
            var sql = `SELECT RoomID FROM rooms WHERE roomname = ('${req.roomname}')`;
            db.query(sql, [], function(err, results) {
              if (err) { throw err; }
              let roomID = results[0].RoomID;
              let sql = `SELECT UserID FROM users WHERE username = ("${req.username}")`;
              db.query(sql, [], function(err, results) {
                if (err) { throw err; }
                console.log('Results: ', results[0].UserID);
                let userID = results[0].UserID;
                sql = `INSERT INTO messages (Txt, UserID, RoomID) VALUES ("${req.message}", ${userID}, ${roomID})`;
                db.query(sql, [], function(err, results) {
                  if (err) { throw err; }
                  console.log('1 message inserted');
                });
              });
            });  
          });
        } else {
          let roomID = results[0].RoomID;
          let sql = `SELECT UserID FROM users WHERE username = ("${req.username}")`;
          db.query(sql, [], function(err, results) {
            if (err) { throw err; }
            console.log('Results: ', results[0].UserID);
            let userID = results[0].UserID;
            sql = `INSERT INTO messages (Txt, UserID, RoomID) VALUES ("${req.message}", ${userID}, ${roomID})`;
            db.query(sql, [], function(err, results) {
              if (err) { throw err; }
              console.log('1 message inserted');
            });
          }); 
        }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (req, res) {},
    post: function (message) {
      var sql = `SELECT UserID FROM users WHERE username = ('${message.username}')`;
      db.query(sql, [], function(err, results) {
        if (err) { throw err; }
        if (results.length === 0) {
          sql = `INSERT INTO users (username) VALUES ("${message.username}")`;
          db.query(sql, [], function(err, results) {
            if (err) { throw err; }
            console.log('1 user inserted');
          });
        } else { console.log('User already present'); }
      });
    }
  }
};

