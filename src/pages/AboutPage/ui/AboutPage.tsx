import React from 'react';
import cls from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('about')

    return (
        <div>
            {t('Стэк технологий')}
            <div className={cls.technologyContainer}>
                <div>- React</div>
                <div>- Typescript</div>
                <div>- Webpack</div>
                <div>- i18next</div>
            </div>
        </div>
    );
};

export default AboutPage;