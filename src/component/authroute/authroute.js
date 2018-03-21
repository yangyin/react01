import React,{Component} from 'react'
import axios from 'axios';
class AuthRoute extends Component {
	componentDidMount() {
		//获取用户信息
		axios.get('/user/info')
		.then(res => {
			if(res.status === 200) {
				console.log(res.data)
			}
		})
		// 是否登录  
		// 现在的URL地址 Login是不需要跳转
		//用户的TYPE 身份是BOSS 还是牛人
		//用户是否完善信息
	}
	render() {
		return null
	}
}

export default AuthRoute;