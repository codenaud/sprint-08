"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.default.findAll();
    res.json({ listUsers });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Desetructuramos el id
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Desetructuramos el id
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
    else {
        yield user.destroy();
        res.json({
            msg: 'El producto ha sido eliminado con éxito!',
        });
    }
});
exports.deleteUser = deleteUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Desetructuramos el body
    const { body } = req;
    try {
        yield user_1.default.create(body);
        res.json({
            msg: 'El producto fue agregado con éxito!',
        });
    }
    catch (error) {
        console.log(error);
        console.log('Upps! Ocurrió un error, comuniquese con soporte');
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Desetructuramos el id y body
    const { id } = req.params;
    const { body } = req;
    const user = yield user_1.default.findByPk(id);
    try {
        if (user) {
            yield user.update(body);
            res.json({
                msg: 'El producto ha sido actualizado con éxito!',
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        console.log('Upps! Ocurrió un error, comuniquese con soporte');
    }
});
exports.updateUser = updateUser;
/** pruebas método postUser
{
  "name": "Mark",
  "lastName": "Otto",
  "email": "mark.otto@demo.com",
  "phone": "609123123",
  "location": "Portland, Oregon",
  "hobby": "Photography"
}
 */
