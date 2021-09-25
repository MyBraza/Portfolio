import { DisplayObject, Vector } from '@PixiScripts/constructors'
import { getDistance } from '@PixiScripts/utils'

export class PhysicsObject extends DisplayObject {
  mass: number
  friction: number
  gravity: number
  isFalling: boolean
  bounciness: number
  isSlowing: boolean
  isTouching: boolean
  velocity: Vector
  collisionRadius: number
  parentObject: PhysicsObject
  constructor(textureSrc: string) {
    super(textureSrc)
    this.mass = 1
    this.friction = 0.1
    this.gravity = 1
    this.isFalling = false
    this.isTouching = false
    this.collisionRadius = 100
    this.bounciness = 1
    this.velocity = new Vector(0)
    this.isSlowing = false
    this.parentObject = this
  }

  falling = (delta: number) => {
    this.velocity.add({ x: 0, y: this.gravity * delta })
    this.velocity.correctMagnitude()
  }

  dragging = (delta: number) => {
    const pointerPosition = this.getPointerPosition()
    this.velocity.magnitude =
      (getDistance(pointerPosition, this) * delta) /
      (this.mass > 0 ? this.mass : 1)
    this.velocity.defineByDirection(pointerPosition, this)
  }

  slowing = (delta: number) => {
    const magnitude =
      this.velocity.magnitude -
      (this.mass !== 0
        ? (this.friction * delta) / this.mass
        : this.velocity.magnitude)
    this.velocity.correct({
      magnitude: magnitude > 0 ? magnitude : 0
    })
  }
}
