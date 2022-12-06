import React from 'react';
export const Button = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.styles
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: props.onClick,
    color: props.color,
    background: props.bg,
    border: props.border,
    padding: props.padding,
    radius: props.radius,
    fontSize: props.fontSize
  }, props.text));
};
import styled from "styled-components";
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
const Base = props => {
  return /*#__PURE__*/React.createElement(Button, props);
};
export default Base;
