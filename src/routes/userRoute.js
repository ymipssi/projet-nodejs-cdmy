// src/routes/userRoutes.js
const user = require('../controllers/userController');

module.exports = (app) => {
    app.route('/register')
    .post(user.register);

    app.route('/sign_in')
    .post(user.sign_in);

    app.route('/display')
    .get(user.get_all_users);

    app.route('/display/intervenant')
    .get(user.get_all_inters);

    app.route('/display/etudiant')
    .get(user.get_all_etud);

    app.route('/display/:_id')
    .get(user.get_a_user);

}
