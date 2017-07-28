namespace('DLA.Models')

const MAX_SPEED = 1

class Crucible {
  static position ({ width, height }) {
    return new DLA.Models.Vector({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    })
  }

  static velocity () {
    return new DLA.Models.Vector({
      x: ((Math.random() * MAX_SPEED) + 1) * (Math.random() < 0.5 ? -1 : 1),
      y: ((Math.random() * MAX_SPEED) + 1) * (Math.random() < 0.5 ? -1 : 1),
    })
  }

  static movingParticle (dimensions) {
    return new DLA.Models.Particle({
      position: this.position(dimensions),
      velocity: this.velocity()
    })
  }

  static random ({ amount, width, height  }) {
    return new Array(amount).fill(0).map(() => this.movingParticle({ width, height }))
  }

  static fixed (position = {}) {
    return new Particle({
      position: new DLA.Models.Vector(position),
      velocity: new DLA.Models.Vector({})
    })
  }

  static centerpoint ({ width, height }) {
    return [this.fixed({ x: width / 2, y: height / 2})]
  }

  static horizontal ({ width, height }) {
    return new Array(width).fill(0).map((_, index) => (
      this.fixed({ x: index, y: height})
    ))
  }

  static vertical ({ width, height }) {
    return new Array(height).fill(0).map((_, index) => (
      this.fixed({ x: width, y: index })
    ))
  }

  static box ({ width, height }) {
    const bottom = this.horizontal({
      width: Math.floor(width / 2),
      height: Math.floor((height * 3) / 4)
    })
    const top = this.horizontal({
      width: Math.floor(width / 2),
      height: Math.floor(height / 4)
    })
    const left = this.vertical({
      width: Math.floor(width / 4),
      height: Math.floor(height / 2)
    })
    const right = this.vertical({
      width: Math.floor((width * 3) / 4),
      height: Math.floor(height / 2)
    })

    bottom.concat(top).forEach(({ position }) => position.x += Math.floor(width / 4))
    left.concat(right).forEach(({ position }) => position.y += Math.floor(height / 4))

    return top.concat(bottom, left, right)
  }

  static circle ({ height, width }) {
    const xcenter = width / 2
    const ycenter = height / 2
    const radius = Math.min(width, height) / 3

    return new Array(500).fill(0).map((_, index) => {
      return this.fixed({
        x: xcenter + radius * Math.cos(index / (2 * Math.PI)),
        y: ycenter + radius * Math.sin(index / (2 * Math.PI))
      })
    })
  }

  static scatter ({ amount, height, width }) {
    return new Array(amount).fill(0).map(() => this.fixed({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    }))
  }
}

DLA.Models.Crucible = Crucible
