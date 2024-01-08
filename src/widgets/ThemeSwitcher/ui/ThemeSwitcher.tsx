import {clsx} from "shared/lib/clsx";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/themeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={clsx(cls.themeSwither, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>

    );
};