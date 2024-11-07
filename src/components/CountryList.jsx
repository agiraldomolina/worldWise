import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
function CountryList({cities, isLoading}) {
    if (isLoading) return <Spinner />

    if (!cities.length) 
        return
            (<Message message="Add your first city by clicking on a city on the map"/>             
            );
    // Select only countries from the cities array
    // const countries = cities.filter(city => city.country);
    // 
    const countries = cities.reduce((arr, city)=>{
        if (!arr.map((el) => el.country).includes(city.country))
            return[...arr, {country: city.country, flag: city.flag}];
        else return arr;
    } ,[])

    return (
        <ul className={styles.countryList}>
            {countries
                .map((country)=>
                    <CountryItem 
                        country={country}
                        key={country}
                    />
                )
            }
        </ul>
    )
}

export default CountryList
