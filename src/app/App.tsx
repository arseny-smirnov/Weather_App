import React, {Suspense} from 'react';
import './styles/index.scss'
import {clsx} from "shared/lib/clsx";
import {useTheme} from "app/providers/themeProvider";
import {AppRouter} from "app/providers/routers";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={clsx('app', {}, [theme])}>
            <Suspense fallback="LOADING...">
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
