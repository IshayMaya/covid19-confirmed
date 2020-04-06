import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'

const covidImg = require('../../../assets/images/icon.png')


const Country = ({name, data, rank, flagUrl, ratio, active, isLast, timer}) => {
    
    const [confirmed, setConfirmed] = useState(0)

    useEffect(() => {
        let climbingNumbersInterval;
        if (!confirmed || !active || data.confirmed === confirmed) setConfirmed(data.confirmed)
        else {
            let counter = 0;
            climbingNumbersInterval = setInterval(() => {
                if (counter === data.confirmed) {
                    clearInterval(climbingNumbersInterval)
                    climbingNumbersInterval = null;
                }
                else {
                    setConfirmed(c => c + 1)
                    counter++
                }
            },timer / (data.confirmed - confirmed))
        }
        return () =>  {
            setConfirmed(data.confirmed)
            if (climbingNumbersInterval) {
                clearInterval(climbingNumbersInterval)
            }
        }
        
    }, [data.confirmed, active])

    return (
        <div className={styles.country} 
        style={{top: `${rank * 50 + 20}px`, transform: `translateX(${isLast ? '-100vw' : '0'})`}
        }>
            <div 
            className={`${styles.bar} ${active ? styles.active : ''}`} 
            style={{minWidth: `${ (data.confirmed / ratio) + 37 }px`}}>
                <img src={flagUrl} alt={name}/>
            </div>
            <h1>&nbsp;{confirmed.toLocaleString()}</h1>
            <div className={styles.covidImg}>
                <img className={active ? styles.pump : '' } src={covidImg} alt=""/>
            </div>
        </div>
    )
}

export default Country