class Config {
  static #instace = null;

  constructor() {
    if (Config.#instace) {
      return Config.#instace;
    }

    this.theme = "claro";
    this.idioma = "es";

    Config.#instace = this;
  }
}

const instaciaA = new Config();
const instaciaB = new Config();

console.log(instaciaA === instaciaB); // true
console.log(instaciaA.theme);

instaciaA.theme = "oscuro";

console.log(instaciaB.theme);
