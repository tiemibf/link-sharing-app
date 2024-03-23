import { error, input, inputIcon, inputWrapper } from "./Input.css";

interface InputProps {
    icon?: React.ReactNode;
    placeholder?: string;
    hasError?: boolean;
    errorMessage?: string;
}

export const Input = ({ icon, placeholder, hasError, errorMessage }: InputProps) => {
    return (
        <div className={inputWrapper} data-invalid={hasError}>
            <div className={inputIcon}>{icon}</div>
            <input className={input} placeholder={placeholder} />
            {hasError && <div className={error}>{errorMessage}</div>}
        </div>
    )
}