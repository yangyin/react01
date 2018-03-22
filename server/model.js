const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'

mongoose.connect(DB_URL)

mongoose.connection.on('connected',function() {
	console.log('mongo connect success')
})

const models = {
	user:{
		user:{type:String,require:true},
		psd:{type:String,require:true},
		type:{type:String,require:true},
		avatar:{type:String},//头像
		desc:{type:String},//说明
		title:{type:String},//职位名
		company:{type:String},
		moneny:{type:String}
	},
	chat:{}
}


for (let m in models) {
	mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name) {
		// body...
		return mongoose.model(name)
	}
}