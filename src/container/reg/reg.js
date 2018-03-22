import React,{Component} from 'react'
import Logo from '../logo/logo';
import { List,InputItem,WingBlank,WhiteSpace,Button,Radio } from 'antd-mobile';

import { connect } from 'react-redux';
import { register} from '../../redux/user.redux';

@connect(
	state =>state.user,
	{register}
)


class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user:'',
			psd:'',
			repsd:'',
			type:'genuis'
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleChange(key,val) {
		this.setState({
			[key]:val
		})
	}
	handleClick() {
		// console.log(this.props)
		this.props.register(this.state)
	}
	render() {
		const RadioItem = Radio.RadioItem;
		return(
			<div>
				<Logo></Logo>
				<List>
					{this.props.msg?<p>{this.props.msg}</p>:null}
					<InputItem
						onChange={(v) => this.handleChange('user',v)}
					>用户名</InputItem>
					<WhiteSpace />
					<InputItem
						onChange={(v) => this.handleChange('psd',v)}
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						onChange={(v) => this.handleChange('repsd',v)}
					>确认密码</InputItem>
					<WhiteSpace />
					<RadioItem 
						onChange={() => this.handleChange('type','genuis')}
						checked={this.state.type == 'genuis'}
					>牛人</RadioItem>
					<RadioItem 
						checked={this.state.type == 'boss'}
						onChange={() => this.handleChange('type','boss')}
					>BOSS</RadioItem>
					<WhiteSpace />
					<Button type="primary" onClick={this.handleClick}>注册</Button>
				</List>
			</div>
		) 
	}
}

export default Register;