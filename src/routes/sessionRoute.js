module.exports = (app) => {
    const sessionController = require('../controllers/sessionController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');
  
   app.route('/user/:user_id/session') // req.params.
    .get(sessionController.get_all_sessions)
    .post(jwtMiddleware.verify_token, sessionController.create_a_session);
  
   app.route('/sessions/id_session')
    .all(jwtMiddleware.verify_token)
    .get(sessionController.get_a_session)
    .put(sessionController.update_a_session)
    .delete(sessionController.delete_a_session);
  }

  