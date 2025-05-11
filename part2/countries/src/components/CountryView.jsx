import React, { useState } from "react"
import CountryFullInfo from "./CountryFullInfo"
import CountrySimpleInfo from "./CountrySimpleInfo"


const CountryView = ({countries, selectedCountry, onShowFull: handleShowFull}) => {
  let countryToShowFull = selectedCountry;
  if (countries.length === 1) {
    countryToShowFull = countries[0]
  }

  if (countryToShowFull !== null) {
    return (
      <div>
        <CountryFullInfo 
          name={countryToShowFull.name}
          capital={countryToShowFull.capital}
          area={countryToShowFull.area}
          languages={countryToShowFull.languages}
          flags={countryToShowFull.flags}
        />
      </div>
    )
  }

  if (countries.length > 10) {
    return (<div>Too many matches, specify another filter</div>)
  }

  return (
    <>
      {
        countries.map(
          country => (
            <CountrySimpleInfo 
              key={country.id}
              id={country.id}
              name={country.name}
              showFull={handleShowFull}
            />)
        )
      }
    </>
  )
}

export default CountryView