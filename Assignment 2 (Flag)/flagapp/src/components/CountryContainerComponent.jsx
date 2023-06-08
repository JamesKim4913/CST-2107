import { useEffect, useState } from "react";
import CountryCardComponent from "./CountryCardComponent";

const CountryContainerComponent = () => {

    const [countryData , setCountryData] = useState([]);

    // UseEffect

    // This will be called only once 
    useEffect(() => {
        // This is the place where we will call our API
        getCountryData();
    }, [])

    // Get all country, call API
    const getCountryData = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all');
        const convertedJSONData = await data.json();
        setCountryData(convertedJSONData);       
    }   

    return (
        <div>  
            <CountryCardComponent data={countryData} />
        </div>
    )
}

export default CountryContainerComponent;