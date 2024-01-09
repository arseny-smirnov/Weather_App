import {clsx} from "shared/lib/clsx";
import cls from './SearchLocation.module.scss';
import React, {useState} from "react";
import {Button} from "shared/ui";
import {useTranslation} from "react-i18next";

export const API_KEY = 'b219c145016bfacf09a278a96449a8f5';

interface SearchLocationProps {
    className?: string
}

export const SearchLocation: React.FC<SearchLocationProps> = ({className}) => {
    const {t} = useTranslation('main')

    const [inputState, setInputState] = useState('')
    const [isFetchWithError, setIsFetchWithError] = useState<boolean>(false)
    const [temperatureState, setTemperatureState] = useState<number | undefined>()

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputState(event.target.value)
    }

    const getData = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fetchData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputState}&limit=${1}&appid=${API_KEY}`)
        if (fetchData.status === 200) {
            const data = await fetchData.json()

            const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0]?.lat}&lon=${data[0]?.lon}&appid=${API_KEY}`)
            if (fetchWeather.status === 200) {
                const weatherData = await fetchWeather.json()
                if (weatherData?.main?.temp) {
                    const tempValue = Math.round(weatherData.main.temp - 273.15)
                    setIsFetchWithError(false)
                    setTemperatureState(tempValue)
                }
            } else setIsFetchWithError(true)

        } else setIsFetchWithError(true)
    }

    return (
        <div>
            <form
                onSubmit={event => getData(event)}
                className={clsx(cls.searchContainer, {}, [])}
            >
                <input
                    type="text"
                    name="city"
                    placeholder={t('Введите населенный пункт')}
                    className={cls.inputContainer}
                    onChange={event => onChangeHandler(event)}
                />
                <Button type="submit">{t('Поиск')}</Button>
            </form>
            {
                isFetchWithError
                    ?
                    <div>{t('Ошибка выполнения запроса')}</div>
                    :
                    <div>{`${t('Текущая температура воздуха')}: ${temperatureState || ''}`}</div>
            }
        </div>
    );
};