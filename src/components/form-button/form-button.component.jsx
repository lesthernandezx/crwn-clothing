import React from 'react';

import './form-button.styles.scss';

const FormButton = ({value , isGoogleSignIn, ...otherProps}) =>(

    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
        {...otherProps}>
        {value}
    </button>
)

export default FormButton;