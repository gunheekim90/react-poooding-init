import React from 'react';
import TextFieldGroup from '../../Components/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../API/Auth';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import validateInput from '../../Utils/loginValidation'
import { Route, Redirect } from 'react-router'
import isEmpty from 'lodash/isEmpty';
import styles from './LoginFormStyle.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LoginForm extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      password: '',
	      errors: {},
		  isLoading: false,
		  redirect : false
	    };

	    this.onSubmit = this.onSubmit.bind(this);
	    this.onChange = this.onChange.bind(this);
	  }

	isValid() {
	    const { errors, isValid } = validateInput(this.state);

	    if (!isValid) {
	      this.setState({ errors });
	    }

	    return isValid;
	}

	async onSubmit(e){
		e.preventDefault();
		if(this.isValid()){

			await this.setState({errors : {}, isLoading : true});
			// console.log(this.state)
			await this.props.login(this.state).then((res) => {

					console.log('[LoginForm res]')
					// console.log(res);
					if(res === 'axiosError'){
						this.setState({
							errors: {
								email : "External Server Error(axios error)"
							},
								isLoading : false,
								redirect : false
						})
					}else if(res === 'authAccountError'){
						this.setState({
							errors: {
								email : "이메일을 다시 확인해주세요",
								password : "비밀번호를 다시 확인해주세요"
							},
								isLoading : false,
								redirect : false
						})
					}else if(res === 'jwtError'){
						this.setState({
							errors: {
								email : "External Server Error(jwtError)"
							},
								isLoading : false,
								redirect : false
						})
					}else{
						console.log("성공")
						this.setState({redirect : true});
					}

				}).catch((err)=>{
					console.log(err)
					alert("네트워크 불안정으로 잠시 뒤, 다시 시도 해주시기 바랍니다.")
					this.setState({
						errors: {
						 email : "Internal server error 재접속 요망"
						},
						isLoading : false,
						redirect : false
					 })
				})
				
		}
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	render(){
		const { errors, email, password, isLoading, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/'/>;
		  }

		return (

			<form onSubmit={this.onSubmit} className={cx('loginForm')}>
			    <div style={{textAlign : 'center'}}>
				  <h1 style={{color : '#fff',fontWeight : '300'}}>Looogin</h1>
				</div>
				

				<TextFieldGroup
					field='email'
					label='User Email'
					value={email}
					type='email'
					error={errors.email}
					onChange={this.onChange}
				/>

				<TextFieldGroup
					field='password'
					label='Password'
					type='password'
					value={password}
					error={errors.password}
					onChange={this.onChange}
				/>

				<div className="form-group">
					<button className="btn btn-success btn-lg" disabled={isLoading} style={{background : 'red', borderRadius : '0px',border : 'none'}}>Login</button>
				</div>
			</form>
		);
	}
}

LoginForm.PropTypes = {
	login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(null,{login})(LoginForm);