var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (result) {
        res.writeHead(200, 'success');
        res.end(JSON.stringify(result));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, function() {
        console.log('hellooooo', req.body);
        res.writeHead(200, 'success');
      });
      res.end(req.body.message);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get(function (mapped) {
        // console.log(mapped);
        res.writeHead(200, 'success');
        res.end(JSON.stringify(mapped));
      });
    },
    post: function (req, res) {

      models.users.post(req.body.username, function() {
        res.writeHead(200, 'success');
      });
      res.end(req.body.username);
    }
  }
};

