import axios from 'axios';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState={
	isAuth:false,
	user:'',
	psd:'',
	type:'',
	msg:''
}

export function user(state=initState,action) {
	// body...
	switch(action.type) {
		case REGISTER_SUCCESS:
			return {...state,msg:'',isAuth:true,...action.payload}
		break;
		case ERROR_MSG:
			return {...state,isAuth:false,msg:action.msg};
		break;
		default:
			return state;
	}
}

function registerSuccess(data) {
	return {type:REGISTER_SUCCESS,payload:data};
}
function errorMsg(msg) {
	return {msg,type:ERROR_MSG}
}

export function register({user,psd,repsd,type}) {
	if(!user || !psd) {
		return errorMsg('用户名或者密码必须输入')
	}
	if(psd !== repsd) {
		return errorMsg('2次密码输入不一致！')
	}

	return dispatch => {
		axios.post('/user/register',{user,psd,type})
		.then(res => {
			console.log(res)
			if(res.data.code ===0) {
				dispatch(registerSuccess({user,psd,type}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
	
}