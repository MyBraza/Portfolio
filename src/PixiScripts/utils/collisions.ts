import { PhysicsObject } from '@PixiScripts/constructors'

export const wallCollision = (
  object: PhysicsObject,
  container: { width: number; height: number }
) => {
  object.isFalling =
    object.y + object.collisionRadius * (1 - object.anchor.y) < container.height
  if (
    (object.x + object.collisionRadius * (1 - object.anchor.x) >
      container.width &&
      object.velocity.x > 0) ||
    (object.x - object.collisionRadius * object.anchor.x < 0 &&
      object.velocity.x < 0)
  ) {
    object.x =
      object.x - object.collisionRadius * object.anchor.x > 0
        ? container.width - object.collisionRadius * (1 - object.anchor.x)
        : object.collisionRadius * object.anchor.x
    object.velocity.x = -object.bounciness * object.velocity.x
    object.velocity.y *=
      Math.abs(object.velocity.x) > Math.abs(object.velocity.y)
        ? object.bounciness
        : 1
    object.isTouching = true
  }
  if (
    (object.y + object.collisionRadius * (1 - object.anchor.y) >
      container.height &&
      object.velocity.y > 0) ||
    (object.y - object.collisionRadius * object.anchor.y < 0 &&
      object.velocity.y < 0)
  ) {
    const yVelocityIsSignificant = object.velocity.y > 2
    object.y = !object.isFalling
      ? container.height - object.collisionRadius * (1 - object.anchor.y)
      : object.collisionRadius * object.anchor.y
    object.velocity.y = object.isTouching
      ? object.velocity.y
      : yVelocityIsSignificant
      ? -object.bounciness * object.velocity.y
      : 0
    object.velocity.x *=
      Math.abs(object.velocity.y) > Math.abs(object.velocity.x) &&
      yVelocityIsSignificant
        ? object.bounciness
        : 1
    object.velocity.correctMagnitude()
    object.isTouching = true
    return
  }
  object.isTouching = !object.isFalling
}
