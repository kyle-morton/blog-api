'use strict';
module.exports = function(app) {
  var blogEntry = require('../controllers/blogEntryController');

  // todoList Routes
  app.route('/entries')
    .get(blogEntry.list_all_entries)
    .post(blogEntry.create_an_entry);


  app.route('/entries/:entryId')
    .get(blogEntry.read_an_entry)
    .put(blogEntry.update_an_entry)
    .delete(blogEntry.delete_an_entry);
};