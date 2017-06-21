import { Byte } from './byte';

export class Frame {
  id: Byte;
  a: Byte;
  b: Byte;
  c: Byte;
  d: Byte;
  e: Byte;
  f: Byte;
  g: Byte;
  h: Byte;

  get ascii() {
    let ascii = "";
    if(this.a.value) { ascii += this.a.ascii }
    if(this.b.value) { ascii += this.b.ascii }
    if(this.c.value) { ascii += this.c.ascii }
    if(this.d.value) { ascii += this.d.ascii }
    if(this.e.value) { ascii += this.e.ascii }
    if(this.f.value) { ascii += this.f.ascii }
    if(this.g.value) { ascii += this.g.ascii }
    if(this.h.value) { ascii += this.h.ascii }

    return ascii;
  }

  toString() {
    let stringToReturn = "";
    if(this.id) { stringToReturn += this.id.hex + " " }
    if(this.a.value) { stringToReturn += this.a.hex + " " } else { stringToReturn += "   " }
    if(this.b.value) { stringToReturn += this.b.hex + " " } else { stringToReturn += "   " }
    if(this.c.value) { stringToReturn += this.c.hex + " " } else { stringToReturn += "   " }
    if(this.d.value) { stringToReturn += this.d.hex + " " } else { stringToReturn += "   " }
    if(this.e.value) { stringToReturn += this.e.hex + " " } else { stringToReturn += "   " }
    if(this.f.value) { stringToReturn += this.f.hex + " " } else { stringToReturn += "   " }
    if(this.g.value) { stringToReturn += this.g.hex + " " } else { stringToReturn += "   " }
    if(this.h.value) { stringToReturn += this.h.hex + " " } else { stringToReturn += "   " }

    return stringToReturn;
  }
}
