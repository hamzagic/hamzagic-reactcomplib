import React from 'react';
// import Btn from './styled';

export const Button = props => {
    return (
        <div className={props.styles}>
            <Btn 
                onClick={props.onClick} 
                color={props.color} 
                background={props.bg}
                border={props.border}
                padding={props.padding}>
                    {props.text}
            </Btn>
        </div>
    );
}