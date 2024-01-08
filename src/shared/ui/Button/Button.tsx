import {clsx} from "shared/lib/clsx";
import cls from './Button.module.scss';
import React, {ButtonHTMLAttributes} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={clsx(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};