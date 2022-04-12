"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = require("./config");
var _logger = require("./utils/logger");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let App = class App {
    listen() {
        this.app.listen(this.port, ()=>{
            _logger.logger.info(`=================================`);
            _logger.logger.info(`======= ENV: ${this.env} =======`);
            _logger.logger.info(`🚀 App listening on the port ${this.port}`);
            _logger.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use('/', route.router);
        });
    }
    constructor(routes){
        this.app = (0, _express).default();
        this.env = _config.NODE_ENV || 'development';
        this.port = _config.PORT || 8001;
        this.initializeRoutes(routes);
    }
};
var _default = App;
exports.default = _default;

//# sourceMappingURL=app.js.map