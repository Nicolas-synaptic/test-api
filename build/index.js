"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.App = void 0;
const express_1 = __importDefault(require("express"));
//import axios from 'axios';
exports.App = (0, express_1.default)();
exports.App.use(express_1.default.json());
exports.App.get('/entities/:entity', (_req, res) => {
    // const BankName = req.params.entity;
    // const State = await axios.get(`/entities/histories/last/${BankName}`);
    const State = Math.floor(Math.random() * 3);
    // return res.status;
    console.log(State);
    if (State == 1) {
        return res.status(200).send('owo');
    }
    else if (State == 2) {
        return res.status(504).send('owo');
    }
    return res.status(400).send('owo');
});
const Port = process.env.PORT || 4000;
exports.Server = exports.App.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
