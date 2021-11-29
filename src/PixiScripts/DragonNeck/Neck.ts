import { PhysicsObject } from '@PixiScripts/constructors'
import DragonBody from '@PixiScripts/DragonNeck/DragonBody'
import { getAngle } from '@PixiScripts/utils'
import { TPosition } from '@PixiScripts/types'

const Neck: Array<PhysicsObject> = []

const positionBone = (obj1: PhysicsObject, goal: TPosition) => {
  const springForceX = 3 * (goal.x - obj1.x)
  const springForceY = 3 * (goal.y - obj1.y)
  const dampingForceX = 6 * obj1.velocity.x
  const dampingForceY = 6 * obj1.velocity.y
  const forceX = springForceX - dampingForceX
  const forceY = springForceY - dampingForceY
  obj1.velocity.add({ x: forceX / obj1.mass, y: forceY / obj1.mass })
  obj1.velocity.correctMagnitude()
}

for (let i = 0; i < 12; i++) {
  Neck.push(new PhysicsObject('src/assets/images/dragon-neck.png'))
  Neck[i].parentObject = i !== 0 ? Neck[i - 1] : DragonBody
  Neck[i].anchor.set(0.5, 1)
  Neck[i].width = 20
  Neck[i].height = 40
  Neck[i].collisionRadius = Neck[i].height
  Neck[i].mass = 15
  Neck[i].friction = 1
  Neck[i].bounciness = 0.5
  Neck[i].isFalling = true
  Neck[i].step = () => {
    return (delta) => {
      const goal = {
        x: Neck[i].parentObject.x,
        y:
          Neck[i].parentObject.y -
          Neck[i].parentObject.height * Neck[i].parentObject.anchor.y
      }
      if (i === 0) goal.y += Neck[i].height
      positionBone(Neck[i], goal)
      if (Neck[i].isFalling) Neck[i].falling(delta)
      Neck[i].velocity.applyTo(Neck[i])
      Neck[i].angle = getAngle(Neck[i], { x: goal.x, y: goal.y + 40 }) + 90
    }
  }
}

const Head = new PhysicsObject('src/assets/images/dragon-head.png')
Head.parentObject = Neck[Neck.length - 1]
Head.anchor.set(0.5, 0)
Head.width = 100
Head.height = 100
Head.collisionRadius = Head.height
Head.mass = 15
Head.friction = 1
Head.bounciness = 0.5
Head.isFalling = true
Head.step = () => {
  return (delta) => {
    const goal = {
      x: Head.parentObject.x,
      y:
        Head.parentObject.y -
        Head.parentObject.height * Head.parentObject.anchor.y
    }
    positionBone(Head, goal)
    if (Head.isFalling) Head.falling(delta)
    Head.velocity.applyTo(Head)
    Head.angle = getAngle(Head, { x: goal.x, y: goal.y + 40 }) - 90
  }
}

Neck.push(Head)

export default Neck
