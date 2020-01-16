module.exports = (app) => {
  const noteController = require('../controllers/noteController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

  app.route('/posts/:post_id/notes') // req.params.post_id
  .get(noteController.get_all_notes)
  .post(jwtMiddleware.verify_token, noteController.create_a_note);
//
//  app.route('/comments/:comment_id')
//  .all(jwtMiddleware.verify_token)
//  .get(commentController.get_a_note)
//  .put(commentController.update_a_note)
//  .delete(commentController.delete_a_note);
}
