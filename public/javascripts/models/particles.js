namespace('DLA.Models')

class Particles {
  constructor ({ collection = [] }) {
    this.collection = collection
  }

  at (index) {
    return this.collection[index]
  }

  move () {
    this.invoke('move')
  }

  boundBy (dimensions = {}) {
    this.invoke('boundBy', dimensions)
  }

  bounceOff (bounds = {}) {
    this.invoke('bounceOff', bounds)
  }

  freeze () {
    const stationary = this.collection.filter(particle => particle.isStationary())
    const moving = this.collection.filter(particle => !particle.isStationary())

    stationary.forEach(fixedParticle => {
      moving.forEach(looseParticle => {
        if (looseParticle.isTouching(fixedParticle)) {
          looseParticle.freeze()
        }
      })
    })
  }

  toJSON () {
    return this.invoke('toJSON')
  }

  invoke (method, parameters) {
    return this.collection.map(element => element[method](parameters))
  }
}

DLA.Models.Particles = Particles
