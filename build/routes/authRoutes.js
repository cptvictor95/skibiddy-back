"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var signUpController_1 = __importDefault(require("../controller/signUpController"));
var authRoutes = express_1.Router();
authRoutes.post('/signup', signUpController_1.default);
exports.default = authRoutes;
//# sourceMappingURL=authRoutes.js.map