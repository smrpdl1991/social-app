import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../component/InputField';
import { loginSchema } from '../schema/inputFieldSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            loginEmail: '',
            loginPassword: '',
            remember_me: false,
        },
    });

    const onSubmit = (data: any) => {
        const { loginEmail, loginPassword, remember_me } = data;
        console.log('Submitted Data:', loginEmail, loginPassword, remember_me);
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <InputField
                id="loginEmail"
                type="text"
                placeholder="Email address"
                label="Email address"
                hasError={!!errors.loginEmail}
                errorMessage={errors.loginEmail?.message?.toString() ?? ''}
                {...register('loginEmail')}
            />
            <InputField
                id="loginPassword"
                type="password"
                placeholder="Password"
                label="Password"
                hasError={!!errors.loginPassword}
                errorMessage={errors.loginPassword?.message?.toString() ?? ''}
                {...register('loginPassword')}
            />
            <div className="d-inline-block w-100">
                <div className="form-check d-inline-block mt-2 pt-1">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember_me"
                        {...register('remember_me')}
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                        Remember Me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary float-end">
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default SignInForm;
