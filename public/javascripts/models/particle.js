namespace('DLA.Models')

class Particle {
  constructor ({ position, velocity, radius = 2 }) {
    this.position = position || new Vector({})
    this.velocity = velocity || new Vector({})
    this.radius = radius
  }

  move () {
    this.position.add(this.velocity)
  }

  boundBy (dimensions = {}) {
    this.position.boundBy(dimensions)
  }

  bounceOff ({ xmin, ymin, xmax, ymax }) {
    const { x, y } = this.position

    if (x <= xmin || x >= xmax ) {
      this.velocity.invertX()
    }

    if (y <= ymin || y >= ymax) {
      this.velocity.invertY()
    }
  }

  isStationary () {
    return this.velocity.isZero()
  }

  isTouching (particle) {
    return this.distanceFrom(particle) <= this.radius + particle.radius
  }

  distanceFrom (particle) {
    return this.position.distanceFrom(particle.position)
  }

  freeze () {
    this.velocity.zero()
  }

  toJSON () {
    const { x, y } = this.position

    return { x, y, radius: this.radius }
  }
}

DLA.Models.Particle = Particle
