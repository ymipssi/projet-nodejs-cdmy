const sessionController = require('../controllers/sessionController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
  
   app.route('/sessions') // req.params.
    .get(sessionController.get_all_sessions)
    .post(sessionController.create_a_session);
  
   app.route('/sessions/:id')
    .get(sessionController.get_a_session)
    .put(sessionController.update_a_session)
    .delete(sessionController.delete_a_session);
  }

