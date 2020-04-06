import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment'
import Countries from './Countries'
import dataService from '../services/data'
import styles from './styles.module.scss'

const Layout = () => {
    const [countriesData, setCountriesData] = useState([])
    const [biggestNumber, setBiggestNumber] = useState(0)
    const [currentDate, setCurrentDate] = useState('')

    const fetchData = useCallback(async() => {
        const {countriesData: data, biggestConfirmedNumber} = await dataService.fetchData()
        setCountriesData(data)
        setBiggestNumber(biggestConfirmedNumber)
    }, [])

    useEffect( () => {
        fetchData()
    }, [fetchData])


    return (
        <section className={styles.layout}>
            <h1>Covid-19 Confirmed Cases</h1>
            {
            currentDate &&
            <div className={styles.backgroundText}>
                {moment(currentDate).format("MMM") }&nbsp;
                <span>{moment(currentDate).format("Do") }</span>
            </div>
            }
            <Countries countriesData={countriesData} biggestNumber={biggestNumber} getDate={setCurrentDate}/>
        </section>
    )
}

export default Layout