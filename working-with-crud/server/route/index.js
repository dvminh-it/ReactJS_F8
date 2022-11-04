const controller = require('../controller');
const routes = (app) => {
    app.route('/')
        .get(controller.getUser)
        .post(controller.addUser);
    app.route('/:id')
        .delete(controller.deleteUser)
        .put(controller.updateUser);
    app.route('/search')
        .get(controller.searchUser);
    app.route('/pagination')
        .get(controller.paginate);
    app.route('/searchPaginate')
        .get(controller.searchPaginate);
    app.route('/SortById')
        .get(controller.SortById);
};
module.exports = routes;
