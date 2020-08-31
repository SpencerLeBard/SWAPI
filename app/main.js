import CharactersController from "./Controllers/CharactersController.js";
import StarshipsController from "./Controllers/StarshipsController.js"

class App {
  constructor() {
    this.charactersController = new CharactersController();
    this.StarshipsController = new StarshipsController();
  }
}

window["app"] = new App();
