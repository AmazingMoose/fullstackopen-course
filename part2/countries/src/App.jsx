import { React, useState, useEffect } from 'react'
import countryService from './services/countries'
import CountryView from './components/CountryView'


function App() {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowFull = event => {
    event.preventDefault()
    const selected = countries.filter(
      country => country.id === event.target.value
    )
    setSelectedCountry(selected[0])
  }

  const filteredCountries = countries.filter(
    country => country.name.toLowerCase().includes(countryFilter)
  )

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
        <CountryView 
          countries={filteredCountries} 
          selectedCountry={selectedCountry}
          onShowFull={handleShowFull}
        />
      }
    </>
  )
}

export default App
