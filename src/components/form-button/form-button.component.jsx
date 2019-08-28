import React from 'react';

import './form-button.styles.scss';

const FormButton = ({value , ...otherProps}) =>(

    <button className='custom-button' {...otherProps}>
        {value}
    </button>
)

export default FormButton;