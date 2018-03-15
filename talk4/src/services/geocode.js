import axios from 'axios'

export default class Geocode {
  constructor (key) {
    this.token = key
  }

  fetch (query, params = {}) {
    params.access_token = this.token
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`, {
      params
    })
  }
}
