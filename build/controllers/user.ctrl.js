'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _User = require('./../models/User');

var _User2 = _interopRequireDefault(_User);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('./../services/util.service');

var _auth = require('./../services/auth.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var UserCtrl = {
    create: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
            var body, err, user, _ref2, _ref3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            res.setHeader('Content-Type', 'application/json');
                            body = req.body;

                            if (!(!body.unique_key && !body.email && !body.phone)) {
                                _context.next = 6;
                                break;
                            }

                            return _context.abrupt('return', (0, _util.responseError)(res, 'Please enter an email or phone number to register.'));

                        case 6:
                            if (body.password) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt('return', (0, _util.responseError)(res, 'Please enter a password to register.'));

                        case 10:
                            err = void 0, user = void 0;
                            _context.next = 13;
                            return (0, _util.to)((0, _auth.createUser)(body));

                        case 13:
                            _ref2 = _context.sent;
                            _ref3 = _slicedToArray(_ref2, 2);
                            err = _ref3[0];
                            user = _ref3[1];

                            if (!err) {
                                _context.next = 19;
                                break;
                            }

                            return _context.abrupt('return', (0, _util.responseError)(res, err, 422));

                        case 19:
                            return _context.abrupt('return', (0, _util.responseSuccess)(res, {
                                message: 'Successfully created new user.',
                                user: user.toWeb(),
                                token: user.getJWT()
                            }, 201));

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function create(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return create;
    }(),

    login: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var body, err, user, _ref5, _ref6;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            body = req.body;
                            err = void 0, user = void 0;
                            _context2.next = 4;
                            return (0, _util.to)((0, _auth.authUser)(req.body));

                        case 4:
                            _ref5 = _context2.sent;
                            _ref6 = _slicedToArray(_ref5, 2);
                            err = _ref6[0];
                            user = _ref6[1];

                            if (err) (0, _util.responseError)(res, err, 422);

                            return _context2.abrupt('return', (0, _util.responseSuccess)(res, {
                                token: user.getJWT(),
                                user: user.toWeb()
                            }));

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        function login(_x4, _x5) {
            return _ref4.apply(this, arguments);
        }

        return login;
    }()
};

exports.default = UserCtrl;
//# sourceMappingURL=user.ctrl.js.map