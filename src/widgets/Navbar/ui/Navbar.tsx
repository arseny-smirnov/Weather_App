import React from 'react';
import {clsx} from "shared/lib/clsx";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation()

    return (
        <div className={clsx(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Основное')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
