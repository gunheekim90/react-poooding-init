import React from 'react';
import TextFieldGroup from '../../Components/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../API/Auth';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import validateInput from '../../Utils/loginValidation'
import { Route, Redirect } from 'react-router'
import isEmpty from 'lodash/isEmpty';

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
			console.log(this.state)
			await this.props.login(this.state)
				.then((res) => {
					console.log('loginForm res')
					console.log(res);
					if(!isEmpty(res)){
						this.setState({redirect : true});
					}else{
						this.setState({
							errors: {
							 email : "Internal Server Error"
							},
							isLoading : false,
							redirect : false
						 })
					}
					
					
				}).catch((err)=>{
					this.setState({
						errors: {
						 email : "There is no such auth"
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

			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>

				<TextFieldGroup
					field='email'
					label='User Email'
					value={email}
					error={errors.email}
					onChange={this.onChange}
				/>

				<TextFieldGroup
					field='password'
					label='Password'
					value={password}
					error={errors.password}
					onChange={this.onChange}
				/>

				<div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
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