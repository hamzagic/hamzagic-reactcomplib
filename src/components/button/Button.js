export const Button = props => {
    return (
        <div className={props.styles}>
            <Btn {...props}>{props.text}</Btn>
        </div>
    );
}