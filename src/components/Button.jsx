const Button = ({ title = 'Get Started', style }) => {
    return (
        <button type="button" className={`${style} px-6 py-4 rounded-xl bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none`}>
            {title}
        </button>
    );
};

export default Button;