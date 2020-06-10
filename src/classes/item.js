export default class Item {
  constructor(text) {

    this.id = Math.random().toString(36).substr(2, 9);
    this.text = text;
    this.done = false;
  }
}
