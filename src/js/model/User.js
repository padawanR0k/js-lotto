export default class User {
  #wallet;

  #purchaseHistory;

  constructor() {
    this.#wallet = 0;
  }

  buyLotto(seller, machine) {
    const count = seller.calculateLotto(this.#wallet);

    this.#purchaseHistory = [
      ...this.#purchaseHistory,
      ...seller.sellLotto(machine, count),
    ];
  }

  get purchaseHistory() {
    return this.#purchaseHistory;
  }

  set wallet(value) {
    this.#wallet = value;
  }

  get wallet() {
    return this.#wallet;
  }
}
