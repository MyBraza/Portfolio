import {TPosition} from '@PixiScripts/types'

export const getDistance = (
  positionA: TPosition | { x: null; y: null },
  positionB: TPosition | { x: null; y: null }
) => {
  const [xA, yA, xB, yB] = [positionA.x, positionA.y, positionB.x, positionB.y]

  if (xA === null || yA === null || xB === null || yB === null) return 0
  const dx = xA - xB
  const dy = yA - yB
  return Math.sqrt(dx ** 2 + dy ** 2)
}
