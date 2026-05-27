import './Button.css'

const Button = ({ children, onClick, isActive, disabled, className = '' }) => {
    return (
        <button 
            className={`glam-btn ${isActive ? 'activo' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
