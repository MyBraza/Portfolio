import { Application } from 'pixi.js'
import Neck from '@PixiScripts/DragonNeck/Neck'
import DragonBody from '@PixiScripts/DragonNeck/DragonBody'
import { wallCollision } from '@PixiScripts/utils'

export default (App: Application) => {
  App.stage.addChild(...Neck, DragonBody)
  App.ticker.add((delta) => {
    wallCollision(DragonBody, App.view)
    Neck.forEach((el) => {
      wallCollision(el, App.view)
      el.step(App)(delta)
    })
    DragonBody.step(App)(delta)
  })
}
