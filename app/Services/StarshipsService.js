import { ProxyState } from "../AppState.js";
import Starships from "../Models/Starships.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class StarshipsService {


  getStarships() {
    // NOTE "GET" is the method to retrieve data
    api.get('starships')
      .then(res => {
        ProxyState.nextship = res.data.next
        ProxyState.starships = res.data.results.map(c => new Starships(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.nextship) {
      api.get(ProxyState.nextship)
        .then(res => {
          ProxyState.previousship = res.data.previous
          ProxyState.nextship = res.data.next
          ProxyState.starships = res.data.results.map(c => new Starships(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previousship) {
      api.get(ProxyState.previousship)
        .then(res => {
          ProxyState.previousship = res.data.previous
          ProxyState.nextship = res.data.next
          ProxyState.starships = res.data.results.map(c => new Starships(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const StarshipService = new StarshipsService();