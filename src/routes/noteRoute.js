note.exports = (app) => {
  const noteController = require('../controllers/commentController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

  app.route('/posts/:post_id/notes') // req.params.post_id
  .get(commentController.get_all_notes)
  .post(jwtMiddleware.verify_token, commentController.create_a_note);
//
//  app.route('/comments/:comment_id')
//  .all(jwtMiddleware.verify_token)
//  .get(commentController.get_a_note)
//  .put(commentController.update_a_note)
//  .delete(commentController.delete_a_note);
}
