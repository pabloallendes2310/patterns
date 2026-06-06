class Singleton {
  static #instace = null;

  constructor() {
    if (Singleton.#instace) {
      throw new Error(
        'no puedes crear otra instacia con "new". usa Singleton.getInstance()',
      );
    }

    this.theme = "dark";
  }

  static getInstance() {
    if (!Singleton.#instace) {
      Singleton.#instace = new Singleton();
    }
    return Singleton.#instace;
  }
}

const instaciaA = Singleton.getInstance();
const instaciaB = Singleton.getInstance();

console.log(instaciaA === instaciaB); // true

console.log(instaciaB.theme);
