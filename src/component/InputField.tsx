import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef } from "react";

type InputFieldProps = {
    id: string;
    type: string;
    placeholder: string;
    label?: string;
    name: string;
    inputWrapperClass?: string;
    labelClass?: string;
    inputClass?: string;
    disabled?: boolean;
    requirement?: boolean;
    hasError?: boolean;
    errorMessage?: string | undefined;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref'
>;
const InputField: FC<InputFieldProps> = forwardRef<
    HTMLInputElement,
    InputFieldProps
>(
    (
        {
            id,
            type,
            placeholder,
            label,
            name,
            inputWrapperClass,
            labelClass,
            inputClass,
            disabled,
            requirement,
            hasError,
            errorMessage,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={`input-field form-group ${inputWrapperClass ? inputWrapperClass : ''}`}>
                {label ? <label className={`label form-label ${labelClass ? labelClass : ''}`} htmlFor={id}>{label} {requirement && (
                    <span className="requirement">
                        *
                    </span>
                )}</label> : null}
                <input id={id} name={name} type={type} className={`form-control mb-0 ${inputClass ? inputClass : ''} ${hasError && 'has-error'}`} placeholder={placeholder} disabled={disabled ? true : false} ref={ref} {...props} />
                {hasError && errorMessage && (
                    <div className="error-message">
                        <p>
                            {errorMessage}
                        </p>
                    </div>
                )}
            </div>
        );
    });
export default InputField;