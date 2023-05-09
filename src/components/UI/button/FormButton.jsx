import React from 'react';
import classes from "./FormButton.module.css"

const FormButton = ({children, ...props}) => {
    return (
        <div className={classes.button__wrap}>
            <button {...props} className={classes.btn}>{children}</button>
        </div>
    );
};

export default FormButton;