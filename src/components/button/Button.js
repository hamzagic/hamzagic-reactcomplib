import Btn from './styled';

const Button = props => {
    return (
        <Div className={props.styles}>
            <Btn onClick={props.onClick} color={props.color} background={props.bg}>{props.text}</Btn>
        </Div>
    );
}

export default Button;