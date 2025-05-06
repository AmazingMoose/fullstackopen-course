import axios from 'axios'
import { nanoid } from 'nanoid'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(
        response => response.data.map(
            (data) => {
                return {
                    id: nanoid(),
                    name: data.name.common,
                    capital: data.capital,
                    area: data.area,
                    languages: data.languages,
                    flags: data.flags
                }
            }
        )
    )
}

const getCountryByName = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`)
    return request.then(response => response.data)
}

export default { getAll, getCountryByName }