
const Button = ({ styles, name, gradient }) => {
    return (
        <button type="button" className={`py-4 px-6 ${gradient} font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
            {name}
        </button>
    )
}

export default Button