"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT || '3306'),
        multipleStatements: true,
    },
});
exports.default = connection;
//# sourceMappingURL=connection.js.map