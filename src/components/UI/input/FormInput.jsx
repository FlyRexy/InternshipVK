import React from 'react';
import classes from "./FormInput.module.css"

const FormInput = ({...props}) => {
    return (
        <div className={classes.input__wrapper}>
            <div className={classes.input__label}>{props.name}</div>
            <input {...props} className={classes.form__input}></input>
        </div>
    );
};

export default FormInput;