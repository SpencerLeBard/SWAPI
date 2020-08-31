import Character from "./Models/Character.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Starships from "./Models/Starships.js"

// NOTE AppState is the object used to hold all the data from the app, this replaces _state = {}
class AppState extends EventEmitter {
  next = ''
  previous = ''
  /** @type { Character[] } */
  characters = []

  /** @type { Starships[] } */
  starships = []
  nextship = ''

  previousship = ''

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    // calls all the functions that are subcribed/listenting/'on'
    target.emit(prop, value)
    return true
  }
})
