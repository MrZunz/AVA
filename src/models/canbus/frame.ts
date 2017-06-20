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

  ascii() {
    let ascii = "";
    if(this.a.ascii) { ascii += this.a.ascii }
    if(this.b.ascii) { ascii += this.b.ascii }
    if(this.c.ascii) { ascii += this.c.ascii }
    if(this.d.ascii) { ascii += this.d.ascii }
    if(this.e.ascii) { ascii += this.e.ascii }
    if(this.f.ascii) { ascii += this.f.ascii }
    if(this.g.ascii) { ascii += this.g.ascii }
    if(this.h.ascii) { ascii += this.h.ascii }

    return ascii;
  }

  toString() {
    let stringToReturn = "";
    if(this.id) { stringToReturn += this.id.hex + " " }
    if(this.a.value) { stringToReturn += this.a.hex + " " }
    if(this.b.value) { stringToReturn += this.b.hex + " " }
    if(this.c.value) { stringToReturn += this.c.hex + " " }
    if(this.d.value) { stringToReturn += this.d.hex + " " }
    if(this.e.value) { stringToReturn += this.e.hex + " " }
    if(this.f.value) { stringToReturn += this.f.hex + " " }
    if(this.g.value) { stringToReturn += this.g.hex + " " }
    if(this.h.value) { stringToReturn += this.h.hex + " " }

    if(this.a.ascii) { stringToReturn += this.a.ascii }
    if(this.b.ascii) { stringToReturn += this.b.ascii }
    if(this.c.ascii) { stringToReturn += this.c.ascii }
    if(this.d.ascii) { stringToReturn += this.d.ascii }
    if(this.e.ascii) { stringToReturn += this.e.ascii }
    if(this.f.ascii) { stringToReturn += this.f.ascii }
    if(this.g.ascii) { stringToReturn += this.g.ascii }
    if(this.h.ascii) { stringToReturn += this.h.ascii }

    return stringToReturn;
  }
}
