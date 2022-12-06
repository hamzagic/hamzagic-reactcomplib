import React from 'react';
// import Btn from './styled';

export const Button = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.styles
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: props.onClick,
    color: props.color,
    background: props.bg,
    border: props.border,
    padding: props.padding
  }, props.text));
};
import styled from "styled-components";
export const Btn = styled.button`
    font-size: 18px;
    color: ${props => props.color};
    background: ${props => props.background};
    padding: ${props => props.padding};
    border-radius: 5px;
    border: ${props => props.border};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
// import { Button } from './components/button/Button';

const Base = props => {
  return /*#__PURE__*/React.createElement(Button, props);
};
export default Base;
