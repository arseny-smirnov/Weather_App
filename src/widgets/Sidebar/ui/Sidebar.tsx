import {clsx} from "shared/lib/clsx";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const {t} = useTranslation()

    const [collapsed, setCollapsed] = useState(true)
    const [buttonName, setButtonName] =
        useState<'Развернуть' | 'Свернуть'>('Развернуть')

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
        buttonName === 'Развернуть' ? setButtonName('Свернуть') : setButtonName('Развернуть')
    }

    return (
        <div
            className={clsx(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
           <button onClick={onToggle}>{t(buttonName)}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};