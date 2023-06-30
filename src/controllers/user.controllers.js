const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req,res)=>{
    const user = await User.findAll();
    return res.json(user);
})

const getOne = catchError(async(req,res)=>{
    const {id} = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
})

const create = catchError(async(req,res)=>{
    const {first_name,last_name,email,password,birthday} = req.body;
    const user = await User.create({
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        birthday:birthday
    });
    res.status(201).json(user);
})

const remove = catchError(async(req,res)=>{
    const {id} = req.params;
    await User.destroy({where:{id}});
    res.sendStatus(204);
})

const update = catchError(async(req,res)=>{
    const {id} = req.params;
    const {first_name,last_name,email,password,birthday} = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email,
        password,
        birthday
    },{where:{id},returning:true})
    return res.json(user)
})

module.exports = {
    getAll,
    getOne,
    create,
    remove,
    update
}