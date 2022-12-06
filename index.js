import React from 'react';
import Btn from './styled';
const Button = props => {
  return /*#__PURE__*/React.createElement(Div, {
    className: props.styles
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: props.onClick,
    color: props.color,
    background: props.bg
  }, props.text));
};
export default Button;
import styled from "styled-components";
const Btn = styled.button`
    font-size: 18px;
    color: ${props => props.color};
    background: ${props => props.background};
    padding: 0px 20px;
    border-radius: 5px;
`;
export default Btn;
import Button from './components/button/Button.js';
export default Button;
