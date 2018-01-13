import React from 'react';
import TextFieldGroup from '../../Components/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../API/Auth';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import validateInput from '../../Utils/loginValidation'


class LoginForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      password: '',
	      errors: {},
	      isLoading: false
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

	onSubmit(e){
		e.preventDefault();
		if(this.isValid()){
			this.setState({errors : {}, isLoading : true});
			console.log(this.state)
			this.props.login(this.state)
				.then((res) => {
					console.log('loginForm res')
					console.log(res);
				    this.context.router.push('/')})
				.catch((err)=>{
					console.log("에러지역")
				    this.setState({
				       errors: {
				    	email : "There is no such auth"
				       },
				       isLoading : false
				    })
			})
		}
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	render(){
		const { errors, email, password, isLoading } = this.state;

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