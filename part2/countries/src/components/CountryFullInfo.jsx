import React from "react";
import Weather from "./Weather";

const CountryFullInfo = ({name, capital, area, languages, flags}) => {
  return (
    <>
      <h1>{name}</h1>
      {
        capital.name &&
        <div>Capital {capital.name}</div>
      }
      <div>Area {area}</div>
      <div>
        {
          languages &&
          <>
            <h1>Languages</h1>
            <ul>
              { 
                Object
                    .values(languages)
                    .map(lang => <li key={`lang-${lang}`}>{lang}</li>)
              }
            </ul>
          </>
        }
      </div>
      <img src={flags.png} alt={flags.alt} />
      {
        capital.name &&
        <Weather cityName={capital.name} latlng={capital.latlng}/>
      }
    </>
  )
}

export default CountryFullInfo