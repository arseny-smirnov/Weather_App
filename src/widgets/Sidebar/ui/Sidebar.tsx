import {clsx} from "shared/lib/clsx";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div
            className={clsx(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
           <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};