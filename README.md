Diffusion-Limited Aggregration
===

A javascript simulation of a particle system where particles may collide with
sites of nucleation.  Collisions resulting from particles and nucleation sites
are not elastic: instead moving particles become frozen and are themselves
transformed into new sites of nucleation, allowing for the emergent formation of
nifty structures.

![Screenshot](https://raw.githubusercontent.com/NathanielWroblewski/dla/master/screenshot.png)

To run locally:

```sh
$ open http://localhost:8000 && python -m SimpleHTTPServer
```
