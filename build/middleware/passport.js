'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (passport) {
    var opts = {};
    opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = _config2.default.jwt_encryption;

    passport.use(new _passportJwt.Strategy(opts, function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jwt_payload, done) {
            var err, user, _ref2, _ref3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            err = void 0, user = void 0;
                            _context.next = 3;
                            return (0, _util.to)(_User2.default.findById(jwt_payload.user_id));

                        case 3:
                            _ref2 = _context.sent;
                            _ref3 = _slicedToArray(_ref2, 2);
                            err = _ref3[0];
                            user = _ref3[1];

                            if (!err) {
                                _context.next = 9;
                                break;
                            }

                            return _context.abrupt('return', done(err, false));

                        case 9:
                            if (!user) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt('return', done(null, user));

                        case 13:
                            return _context.abrupt('return', done(null, false));

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }()));
};

var _passportJwt = require('passport-jwt');

var _User = require('./../models/User');

var _User2 = _interopRequireDefault(_User);

var _config = require('./../config/config');

var _config2 = _interopRequireDefault(_config);

var _util = require('./../services/util.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;
//# sourceMappingURL=passport.js.map