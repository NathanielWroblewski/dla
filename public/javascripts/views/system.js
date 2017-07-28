namespace('DLA.Views')

class System {
  constructor ({ element, context, next, particles, offset }) {
    this.element = element
    this.context = context
    this.next = next
    this.particles = particles

    this.bounds = {
      xmin: offset,
      xmax: element.width - offset,
      ymin: offset,
      ymax: element.height - offset
    }
  }

  clear () {
    this.context.clearRect(0, 0, this.element.width, this.element.height)
  }

  update () {
    this.particles.move()
    this.particles.boundBy(this.bounds)
    this.particles.bounceOff(this.bounds)
    this.particles.freeze()
  }

  draw () {
    const twoPI = 2 * Math.PI
    this.context.fillStyle = '#444'

    this.particles.toJSON().forEach(({ x, y, radius }) => {
      this.context.beginPath()
      this.context.arc(x, y, radius, 0, twoPI, false)
      this.context.fill()
    })
  }

  render () {
    this.clear()
    this.update()
    this.draw()
    this.next(() => this.render())
  }
}

DLA.Views.System = System
