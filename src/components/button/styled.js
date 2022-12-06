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