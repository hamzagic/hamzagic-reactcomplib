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