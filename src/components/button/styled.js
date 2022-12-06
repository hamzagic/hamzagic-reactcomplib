import styled from "styled-components";

const Btn = styled.button`
    font-size: 18px;
    color: ${props => props.color};
    background: ${props => props.background};
    padding: 0px 20px;
    border-radius: 5px;
`;

export default Btn;