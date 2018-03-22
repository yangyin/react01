const express = require('express');
const Router = express.Router();


const model = require('./model')
const User = model.getModel('user');
Router.get('/info',function (req,res) {
	// body...
	return res.json({code:1})
})
Router.get('/list',function(req,res) {
	User.find({},function(err,doc) {
		return res.json(doc);
	})
})

Router.post('/register',function(req,res) {
	const {user,psd,type} = req.body;
	User.findOne({user},function(err,doc) {
		console.log('*****',doc)
		if(doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
		User.create({user,psd,type},function(e,d) {
			if(e) {
				return res.json({code:1,msg:'后端出错了'})
			} else {
				return res.json({code:0})
			}
		})
	})
})

module.exports = Router;