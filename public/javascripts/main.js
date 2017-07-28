!function () {
  const { Particle, Particles, Vector, Crucible } = DLA.Models
  const { System } = DLA.Views

  const PARTICLE_COUNT = 3000

  const element = document.querySelector('.system')
  const context = element.getContext('2d')
  const next = loop => window.requestAnimationFrame(loop)

  const particles = new Particles({ collection: [] })
  const system = new System({ element, context, next, particles, offset: 2 })

  system.render()

  const select = document.querySelector('.nucleation').onchange = function () {
    const { height, width } = document.querySelector('.system')
    const movingParticles = Crucible.random({ amount: PARTICLE_COUNT, height, width })
    const siteOfNucleation = Crucible[this.value]({ height, width, amount: 5 })
    const collection = siteOfNucleation.concat(movingParticles)
    const particles = new Particles({ collection })

    system.particles = particles
  }
}()
