import React, { FC } from 'react'
import { PixiCanvas } from '@components/organisms'
import DragonNeckScript from '@PixiScripts/DragonNeck'

type TDragonNeckProps = {}

const DragonNeckTemplate: FC<TDragonNeckProps> = () => {
  const options = { width: 1800, height: 900, transparent: true }
  return (
    <main className="flex justify-center items-center h-screen p-12">
      <div className="dragon-neck-canvas">
        <PixiCanvas
          className="max-w-full max-h-full"
          {...options}
          script={DragonNeckScript}
        />
      </div>
    </main>
  )
}

DragonNeckTemplate.displayName = 'DragonNeck'

export default DragonNeckTemplate
