namespace('DLA.Models')

class Vector {
  constructor ({ x = 0, y = 0 }) {
    this.x = x
    this.y = y
  }

  add (vector) {
    this.x += vector.x
    this.y += vector.y
  }

  get magnitude () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  boundBy ({ xmin = 0, ymin = 0, xmax = 500, ymax = 500 }) {
    this.x = Math.max(this.x, xmin)
    this.x = Math.min(this.x, xmax)
    this.y = Math.max(this.y, ymin)
    this.y = Math.min(this.y, ymax)
  }

  invertX () {
    this.x *= -1
  }

  invertY () {
    this.y *= -1
  }

  zero () {
    this.x = 0
    this.y = 0
  }

  isZero () {
    return this.x === 0 && this.y === 0
  }

  distanceFrom ({ x, y }) {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2))
  }
}

DLA.Models.Vector = Vector
