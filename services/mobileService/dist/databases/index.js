"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = require("../config");
var _usersModel = _interopRequireDefault(require("../models/users.model"));
var _logger = require("../utils/logger");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sequelize = new _sequelize.default.Sequelize(_config.DB_DATABASE, _config.DB_USER, _config.DB_PASSWORD, {
    dialect: 'mysql',
    host: _config.DB_HOST,
    port: _config.DB_PORT,
    timezone: '+09:00',
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        underscored: true,
        freezeTableName: true
    },
    pool: {
        min: 0,
        max: 5
    },
    logQueryParameters: _config.NODE_ENV === 'development',
    logging: (query, time)=>{
        _logger.logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true
});
sequelize.authenticate();
const DB = {
    Users: (0, _usersModel).default(sequelize),
    sequelize,
    Sequelize: _sequelize.default
};
var _default = DB;
exports.default = _default;

//# sourceMappingURL=index.js.map