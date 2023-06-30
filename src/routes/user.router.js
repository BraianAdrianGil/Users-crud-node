const express = require('express');
const {getAll,getOne,create,remove,update} = require('../controllers/user.controllers')

const userRouter = express();

userRouter.route('/').get(getAll).post(create);
userRouter.route('/:id').get(getOne).delete(remove).put(update);

module.exports = userRouter