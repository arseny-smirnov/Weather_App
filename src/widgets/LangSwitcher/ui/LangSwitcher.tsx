import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui";
import {clsx} from "shared/lib/clsx";
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return(
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={clsx(cls.langSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
};