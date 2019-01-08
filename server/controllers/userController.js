const User = require('../models/user')
const bcrypt = require('bcrypt');
const getJWTtoken = require('../helpers/JWTtoken')
const bcryptCompare = require('../helpers/bcryptCompare')
ObjectId = require('mongodb').ObjectID;
const axios = require('axios');
require('dotenv').config()


class UserController {
    static readAll(req, res) {
        User.find({})
            .then( users => {
                res.status(200).json({
                    users
                })
            })
            .catch( err => {
                res.status(500).json({
                    err,
                    message: 'error from readAll users'
                })
            })
    }

    static register(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
            .then( user => {
                res.status(201).json({
                    user,
                    message: 'Congratulation! You have been registered! Please login to continue.'
                })
            })
            .catch( err => {
                res.status(500).json({ 
                    err: err.message,
                    message: 'error from creating new user'
                })
            })
    }

    static login(req, res) {
        if (!req.body.email || !req.body.password) {
            res.status(400).json({
                message: "email or password field must be filled in"
            })
        } 
        else {
            User.findOne({
                email: req.body.email
            })
                .then( user => {
                    let result = bcryptCompare(req.body.password, user.password)
                    if (result === true) {
                        let accesstoken = getJWTtoken({
                            email: user.email
                        })
                        res.status(200).json({accesstoken})
                    }
                    else {
                        res.status(400).json({
                            err: err,
                            message: 'invalid password'
                        })
                    }
                })
                .catch(err => {
                    res.status(500).json({err, message: "error from login"})
                })
            
        }
    }

}

module.exports = UserController