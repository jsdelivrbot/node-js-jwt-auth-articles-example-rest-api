'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _article = require('./../controllers/article.ctrl');

var _article2 = _interopRequireDefault(_article);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
    router.post('/article', _passport2.default.authenticate('jwt', { session: false }), _article2.default.addArticle);
};
//# sourceMappingURL=article.js.map