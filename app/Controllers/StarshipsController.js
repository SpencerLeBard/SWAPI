// NOTE ProxyState is the new STORE.State
import { ProxyState } from "../AppState.js";
import { StarshipService } from "../Services/StarshipsService.js";

function _draw() {
  let stars = ProxyState.starships
  let template = ''
  stars.forEach(c => template += c.Template)
  document.getElementById("starships").innerHTML = template
}

export default class StarshipController {
  constructor() {
    // NOTE register subscribers first
    ProxyState.on('starships', _draw)
    // Go get the relevant data
    StarshipService.getStarships();
  }

  next() {
    StarshipService.next()
  }

  previous() {
    StarshipService.previous()
  }
}