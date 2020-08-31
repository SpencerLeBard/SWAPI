export default class Starships {
  constructor({ name, model, crew, passengers }) {
    this.name = name
    this.model = model
    this.crew = crew
    this.pass = passengers
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.model} - Crew: ${this.crew}
          - Passengers ${this.pass}
      </div>
    </div>
    `
  }
}