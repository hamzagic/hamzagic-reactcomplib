export const Button = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.styles
  }, /*#__PURE__*/React.createElement(Btn, props, props.text));
};
// import styled from "styled-components";

export const Btn = styled.button`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    background: ${props => props.background};
    padding: ${props => props.padding};
    border-radius: ${props => props.radius};
    border: ${props => props.radius};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
export const Label = props => {
  return /*#__PURE__*/React.createElement(LabelStyle, props, props.children);
};
export const LabelStyle = styled.label`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    padding: ${props => props.padding};
    border: ${props => props.border};
    background-color: ${props => props.bg};
`;
export const InputField = props => {
  return /*#__PURE__*/React.createElement(Field, props);
};
export const Field = styled.input`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    background: ${props => props.background};
    padding: ${props => props.padding};
    border-radius: ${props => props.radius};
    border: ${props => props.radius};
`;
import React from 'react';
import styled from "styled-components";
