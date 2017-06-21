export class Byte {
  _value: Number;
  changed: Boolean = false;
  empty: Boolean = true;

  constructor(value: Number) {
    this.value = value;
  }

  set value(value) {
    if(value != this._value) {
      this.changed = true;
    }
    else {
      this.changed = false;
    }
    this._value = value;
  }

  get value() {
    return this._value;
  }

  get hex() {
    if(this.value != null) {
      let h = (this.value).toString(16).toUpperCase();
      return h.length === 1 ? '0x' + '0' + h : '0x' + h;
    }
    return "";
  }

  get ascii() {
    return String.fromCharCode(this.value as number)
  }

  toString() {
    return this.hex;
  }
}
