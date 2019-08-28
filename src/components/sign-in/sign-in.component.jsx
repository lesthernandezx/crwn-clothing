import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx'
import FormButton from '../form-button/form-button.component.jsx'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email : '', password: ''})
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState ({[name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="Email"
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                    />
                    
                    <FormInput 
                        label="Password"
                        name='password'
                        type='password'
                        handleChange = {this.handleChange}
                        value = {this.state.password}
                        required
                    />
                    
                    <FormButton type ='submit' value='Sign In'/>
                </form>
            </div>
        )
    }
}

export default SignIn;
