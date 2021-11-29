import React, { FC, useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

type TPixiCanvasProps = {
  width?: number
  height?: number
  backgroundColor?: number
  transparent?: boolean
  className: string
  script: (App: PIXI.Application) => void
}

const PixiCanvas: FC<TPixiCanvasProps> = ({
  width = 800,
  height = 600,
  transparent,
  backgroundColor,
  className,
  script
}: TPixiCanvasProps) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const App = new PIXI.Application({
      width,
      height,
      transparent,
      backgroundColor,
      view: ref?.current ?? undefined
    })

    script(App)
  }, [])

  return <canvas className={className} ref={ref} />
}

PixiCanvas.displayName = 'PixiCanvas'

export default PixiCanvas
