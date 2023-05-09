import React from 'react';
import classes from './FormComment.module.css'

const FormComment = ({...props}) => {
    return (
        <div>
            <div>{props.name}</div>
            <textarea className={classes.comment} {...props}></textarea>
        </div>
    );
};

export default FormComment;