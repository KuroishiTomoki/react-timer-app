export const Input = (props) => {
    const {title, value, setValue, placeholder, type} = props;

    const inputCss = {
        width: "180px",
        marginLeft:"8px"
    }

    return (
        <div>{title}
            <input value={value} onChange={(event) => {setValue(event.target.value)}} type={type} style={inputCss} placeholder={placeholder}></input>
        </div>
    )
}