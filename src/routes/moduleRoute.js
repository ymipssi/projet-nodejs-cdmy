module.exports = (app) => {
  const moduleController = require('../controllers/moduleController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

 app.route('/user/:user_id/modules') // req.params.
  .get(moduleController.get_all_modules)
  .post(jwtMiddleware.verify_token, moduleController.create_a_module);

 app.route('/modules/id_module')
  .all(jwtMiddleware.verify_token)
  .get(moduleController.get_a_module)
  .put(moduleController.update_a_module)
  .delete(moduleController.delete_a_module);
}
