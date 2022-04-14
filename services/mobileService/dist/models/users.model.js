"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _default;
var _sequelize = require("sequelize");
let UserModel = class UserModel extends _sequelize.Model {
};
exports.UserModel = UserModel;
function _default(sequelize) {
    UserModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: _sequelize.DataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        password: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        }
    }, {
        tableName: 'users',
        sequelize
    });
    return UserModel;
}

//# sourceMappingURL=users.model.js.map