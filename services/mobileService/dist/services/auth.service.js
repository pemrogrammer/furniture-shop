"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bcrypt = require("bcrypt");
var _jsonwebtoken = require("jsonwebtoken");
var _config = require("../config");
var _databases = _interopRequireDefault(require("../databases"));
var _httpException = require("../exceptions/HttpException");
var _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let AuthService = class AuthService {
    async signup(userData) {
        if ((0, _util).isEmpty(userData)) throw new _httpException.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({
            where: {
                email: userData.email
            }
        });
        if (findUser) throw new _httpException.HttpException(409, `You're email ${userData.email} already exists`);
        const hashedPassword = await (0, _bcrypt).hash(userData.password, 10);
        const createUserData = await this.users.create(_objectSpread({}, userData, {
            password: hashedPassword
        }));
        return createUserData;
    }
    async login(userData) {
        if ((0, _util).isEmpty(userData)) throw new _httpException.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({
            where: {
                email: userData.email
            }
        });
        if (!findUser) throw new _httpException.HttpException(409, `You're email ${userData.email} not found`);
        const isPasswordMatching = await (0, _bcrypt).compare(userData.password, findUser.password);
        if (!isPasswordMatching) throw new _httpException.HttpException(409, "You're password not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return {
            cookie,
            findUser
        };
    }
    async logout(userData) {
        if ((0, _util).isEmpty(userData)) throw new _httpException.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({
            where: {
                email: userData.email,
                password: userData.password
            }
        });
        if (!findUser) throw new _httpException.HttpException(409, "You're not user");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = {
            id: user.id
        };
        const secretKey = _config.SECRET_KEY;
        const expiresIn = 60 * 60;
        return {
            expiresIn,
            token: (0, _jsonwebtoken).sign(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    constructor(){
        this.users = _databases.default.Users;
    }
};
var _default = AuthService;
exports.default = _default;

//# sourceMappingURL=auth.service.js.map