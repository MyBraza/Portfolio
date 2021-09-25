import {
  Application,
  InteractionEvent,
  Sprite,
  Texture,
  TickerCallback
} from 'pixi.js'
import { TPosition } from '@PixiScripts/types'

export class DisplayObject extends Sprite {
  step: (App: Application) => TickerCallback<any>
  isDragging: boolean
  getPointerPosition: () => TPosition
  pointerOffset: TPosition
  constructor(textureSrc: string) {
    super(Texture.from(textureSrc))
    this.step = () => () => {}
    this.isDragging = false
    this.getPointerPosition = () => {
      return { x: this.x, y: this.y }
    }
    this.pointerOffset = { x: 0, y: 0 }
  }

  onDragStart = (event: InteractionEvent) => {
    if (event.data.button === 0) {
      this.getPointerPosition = () => event.data.getLocalPosition(this.parent)
      const { x: px, y: py } = this.getPointerPosition()
      const x = this.x
      const y = this.y
      this.pointerOffset = { x: px - x, y: py - y }
      this.isDragging = true
    }
  }

  onDragEnd = () => {
    this.isDragging = false
  }

  enableDraggingEvents = () => {
    this.on('mousedown', this.onDragStart)
      .on('touchstart', this.onDragStart)
      .on('mouseup', this.onDragEnd)
      .on('mouseupoutside', this.onDragEnd)
      .on('touchend', this.onDragEnd)
      .on('touchendoutside', this.onDragEnd)
  }

  disableDraggingEvents = () => {
    this.off('mousedown', this.onDragStart)
      .off('touchstart', this.onDragStart)
      .off('mouseup', this.onDragEnd)
      .off('mouseupoutside', this.onDragEnd)
      .off('touchend', this.onDragEnd)
      .off('touchendoutside', this.onDragEnd)
  }
}
