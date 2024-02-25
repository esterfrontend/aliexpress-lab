import './Button.css'

const Button = ( {fn, text}) => {
    return (
        <button className="button--primary" onClick={fn}>{text}</button>
    )
}

export default Button