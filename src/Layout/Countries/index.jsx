import React, {useEffect, useState, useRef} from 'react';
import Country from './Country'
import styles from './styles.module.scss'

const Countries = ({countriesData, biggestNumber, getDate}) => {
    const count = useRef(0);
    const containerRef = useRef({})
    const [counter, setCounter] = useState(0)
    const [ranks, setRanks] = useState({})
    const [barRatio, setBarRatio] = useState(1)
    let currentCount = count.current;

    const NUMBER_OF_COUNTRIES = 7
    const TIMER = 800
    const DIGIT_WIDTH = 8
    const CONTAINER_PADDING = 20 * 2
    const COVIG_IMG_WIDTH = 30
    const CONTAINER_WIDTH = containerRef.current?.width

    useEffect(() => {
        if (containerRef.current) {
            const { width: containerWidth } = containerRef.current.getBoundingClientRect()
            const { length: biggestNumberLength } = biggestNumber.toString()
            const containerWidthMargins =  biggestNumberLength * DIGIT_WIDTH + COVIG_IMG_WIDTH + CONTAINER_PADDING
            const ratio = Math.floor((biggestNumber) / ( containerWidth - containerWidthMargins ))
            setBarRatio(ratio)
        }

    }, [CONTAINER_WIDTH, biggestNumber])

    useEffect(() => {
      count.current = currentCount;
    });

    useEffect(() => {
        let interval;
        if (countriesData && countriesData.length)  {
            interval = setInterval(() => {
                if (currentCount === countriesData[0].data.length - 1) {
                    clearInterval(interval)
                }
                else {
                    currentCount += 1
                    const rankByCountry = {}
                    countriesData.map(countryData => {
                        return {
                            country: countryData.country,
                            confirmed: countryData.data[currentCount].confirmed
                        }
                    })
                    .sort((countryA, countryB) => countryB.confirmed - countryA.confirmed)
                    .forEach(({country}, index) => {
                        rankByCountry[country] = index;
                    })
                    setCounter(c => c + 1)
                    setRanks(rankByCountry)
                    const { date } = countriesData[0].data[currentCount]
                    getDate(date)
                }
            }, TIMER)
        }

        return () => clearInterval(interval)
        
    }, [countriesData])
    
    return (
        <ul className={styles.countries} ref={containerRef}>
            {
                countriesData
                .filter(({country}) => ranks[country] < NUMBER_OF_COUNTRIES)
                .map(({country, data, imgUrl}, i) => {
                    return <Country
                    key={`country-${i}`}
                    name={country} 
                    data={data[counter]} 
                    rank={ranks[country]}
                    flagUrl={imgUrl}
                    ratio={barRatio}
                    active={ counter < countriesData[0].data.length - 1}
                    isLast={ranks[country] === NUMBER_OF_COUNTRIES - 1}
                    timer={TIMER}
                    />
                })

            }
        </ul>
    )
}

export default Countries