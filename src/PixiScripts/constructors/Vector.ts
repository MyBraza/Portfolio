import { TPosition } from '@PixiScripts/types'
import { Sprite } from 'pixi.js'

export class Vector {
  magnitude: number
  x: number
  y: number
  constructor(magnitude: number) {
    this.magnitude = magnitude
    this.x = 0
    this.y = 0
  }

  reverse = () => {
    this.x = -this.x
    this.y = -this.y
  }

  correct = (options?: {
    position?: TPosition | undefined
    magnitude?: number
  }): TPosition => {
    const { position, magnitude } = options ?? {}
    this.magnitude = magnitude ?? this.magnitude
    this.magnitude = this.magnitude < 0 ? -this.magnitude : this.magnitude
    const { x, y } = position ?? this
    const wrongMagnitude = Math.sqrt(x ** 2 + y ** 2)
    if (wrongMagnitude === 0) return { x, y }
    const k = this.magnitude / wrongMagnitude
    if (!position) {
      this.x = x * k
      this.y = y * k
    }
    return { x: x * k, y: y * k }
  }

  correctMagnitude = () => {
    this.magnitude = Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  deflectTo = (
    destination: TPosition | { x: null; y: null },
    position: TPosition = { x: 0, y: 0 },
    intensity: number = 1
  ) => {
    const { x, y } = destination
    if (x === null || y === null) return
    const [ex, ey] = [position.x, position.y]
    const [dx, dy] = [x - ex, y - ey]
    const targetAngle = this.getAngle({ x: dx, y: dy })
    const angle = this.getAngle()
    const step = Math.min(
      intensity / 200,
      Math.abs(targetAngle - angle),
      Math.abs(angle - targetAngle)
    )
    this.defineByAngle(
      Math.abs(targetAngle - angle) < 1
        ? targetAngle < angle
          ? angle - step
          : angle + step
        : targetAngle > angle
        ? angle - step
        : angle + step
    )
  }

  add = (vector: TPosition) => {
    this.x += vector.x
    this.y += vector.y
  }

  defineByAngle = (a: number) => {
    this.x = this.magnitude * Math.cos(a * Math.PI)
    this.y = this.magnitude * Math.sin(a * Math.PI)
  }

  getAngle = (vector: TPosition = this.getCoords()) => {
    return Math.atan2(vector.y, vector.x) / Math.PI
  }

  getCoords = () => {
    return { x: this.x, y: this.y }
  }

  defineByDirection = (
    destination: TPosition | { x: null; y: null },
    position: TPosition = { x: 0, y: 0 }
  ) => {
    const [x, y] = [destination.x, destination.y]
    if (!(x && y)) return
    const [ex, ey] = [position.x, position.y]
    const [dx, dy] = [x - ex, y - ey]
    const magnitude = Math.sqrt(dx ** 2 + dy ** 2)
    this.x = dx
    this.y = dy
    if (magnitude <= this.magnitude) {
      return
    }
    this.correct()
  }

  applyTo = (sprite: Sprite) => {
    sprite.x += this.x
    sprite.y += this.y
  }

  getNewPosition = (position: TPosition): TPosition => {
    let { x, y } = position
    x += this.x
    y += this.y
    return { x, y }
  }
}
