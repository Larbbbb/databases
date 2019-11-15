var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {

      var sqlQuery = 'select messages.id, messages.message_text, messages.roomname, users.username, messages.createdAt from messages inner join users on messages.usernameID = users.id;';

      db.connection.query(sqlQuery, function (err, result) {
        if (err) {
          throw err;
        } else {

          callback(result);
        }
      });

    }, // a function which produces all the messages
    post: function (body) {

      var sqlQuery = 'insert into messages(message_text, roomname, usernameID) values (?, ?, (select id from users where username = ?));';

      db.connection.query(sqlQuery, [body.message, body.roomname, body.username], function (err, results) {
        if (err) {
          throw err;
        } else {
          // db.connection.end();
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      var sqlQuery = 'select username from users;';

      db.connection.query(sqlQuery, function (err, result) {
        if (err) {
          throw err;
        } else {

          var mapped = result.map(item => {
            return item.username;
          });

          callback(mapped);
        }
      });
    },
    post: function (username) {
      console.log(username);
      // db.connection.connect();
      db.connection.query(`insert into users(username) values ('${username}');`, function(err, results) {
        if (err) {
          throw err;
        } else {
          // db.connection.end();
        }
      });
    }
  }
};

