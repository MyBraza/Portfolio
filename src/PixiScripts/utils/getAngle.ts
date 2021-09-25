import { TPosition } from '@PixiScripts/types'

export const getAngle = (point1: TPosition, point2: TPosition) => {
  return (Math.atan2(point2.y - point1.y, point2.x - point1.x) / Math.PI) * 180
}
