module.exports = (app) => {
  const noteController = require('../controllers/noteController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

  app.route('/notes') // req.params.module_id
  .get(noteController.get_all_notes)
  .post(noteController.create_a_note);
//
   app.route('/notes/:note_id')
   // .all(jwtMiddleware.verify_token)
   .get(noteController.get_a_note)
   .put(noteController.update_a_note)
   .delete(noteController.delete_a_note);
}
