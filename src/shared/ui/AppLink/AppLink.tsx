import React from "react";
import {clsx} from "shared/lib/clsx";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    children?: React.ReactNode,
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link to={to} className={clsx(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};