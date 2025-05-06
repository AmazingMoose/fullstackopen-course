import { React, useState, useEffect } from 'react'
import countryService from './services/countries'

const Country = ({data, showFullInfo}) => {
  let info;
  if (showFullInfo) {
    info = 
      <div>
        <h1>{data.name}</h1>
        <p>Capital {data.capital}</p>
        <p>Area {data.area}</p>
        <h1>Languages</h1>
        <ul>
          { 
            Object.values(data.languages).map(lang => <li key={`lang-${lang}`}>{lang}</li>)
          }
        </ul>
        <img src={data.flags.png} alt={data.flags.alt} />
      </div>
  } else {
    info = <>{data.name}</>
  }
  return (
    <div>
      {info}
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState("")


  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const filteredCountries = countryFilter === "" 
                            ? countries
                            : countries.filter(country => country.name.toLowerCase().includes(countryFilter))


  let countryList;
  if (filteredCountries.length > 10) {
    countryList = <div>Too many matches, specify another filter</div>
  } else {
    const shouldShowFull = filteredCountries.length === 1
    countryList =         
      <div>
        {
          filteredCountries.map(
            (country) => (
              <Country key={`country-${country.id}`} data={country} showFullInfo={shouldShowFull}/>
            )
          )
        }
      </div>
  }

  return (
    <>
      <div>find countries 
        <input 
          type='text'
          onChange={handleCountryFilterChange}
        />
      </div>
      {
        countryFilter !== "" && 
        countryList
      }
    </>
  )
}

export default App
