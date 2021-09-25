import { PhysicsObject } from '@PixiScripts/constructors'

const DragonBody = new PhysicsObject('src/assets/images/dragon-body.png')

DragonBody.anchor.set(0.5)
DragonBody.x = 500
DragonBody.y = 500
DragonBody.width = 160
DragonBody.height = 320
DragonBody.collisionRadius = DragonBody.height
DragonBody.mass = 10
DragonBody.friction = 10
DragonBody.bounciness = 0.5
DragonBody.isFalling = true
DragonBody.interactive = true
DragonBody.enableDraggingEvents()

DragonBody.step = () => {
  return (delta) => {
    if (DragonBody.isDragging) DragonBody.dragging(delta)
    if (DragonBody.isFalling) DragonBody.falling(delta)
    if (DragonBody.isSlowing || DragonBody.isTouching) DragonBody.slowing(delta)
    DragonBody.velocity.applyTo(DragonBody)
  }
}

export default DragonBody
