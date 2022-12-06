import React from 'react';

export const Button = props => {
    return (
        <div className={props.styles}>
            <Btn 
                onClick={props.onClick} 
                color={props.color} 
                background={props.bg}
                border={props.border}
                padding={props.padding}
                radius={props.radius}
                fontSize={props.fontSize}>
                    {props.text}
            </Btn>
        </div>
    );
}