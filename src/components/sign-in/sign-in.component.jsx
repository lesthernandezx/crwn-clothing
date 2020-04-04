import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx'
import FormButton from '../form-button/form-button.component.jsx'

import {auth, signInWithGoogle } from '../../firebase/firebase.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit =  async event =>{
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : '', password: ''})
        }
        catch(error) {
            console.log(error);
        }
        
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
                    <div className='buttons'>
                        <FormButton type ='submit' value='Sign In'/>
                        <FormButton type='button' onClick={signInWithGoogle} isGoogleSignIn='true' value = 'Sign In With Google'>
                        </FormButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;