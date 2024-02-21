"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'get Users',
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    // Desetructuramos el id
    const { id } = req.params;
    res.json({
        msg: 'get User',
        id: id,
    });
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    // Desetructuramos el id
    const { id } = req.params;
    res.json({
        msg: 'delete User',
        id: id,
    });
};
exports.deleteUser = deleteUser;
const postUser = (req, res) => {
    // Desetructuramos el id
    const { body } = req;
    /* console.log(body); */
    res.json({
        msg: 'post User',
        body,
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    // Desetructuramos el id y body
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Update User',
        id,
        body,
    });
};
exports.updateUser = updateUser;
