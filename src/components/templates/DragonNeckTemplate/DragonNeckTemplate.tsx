import React, { FC } from 'react'
import { PixiCanvas } from '@components/organisms'
import DragonNeckScript from '@PixiScripts/DragonNeck'

type TDragonNeckProps = {}

const DragonNeckTemplate: FC<TDragonNeckProps> = () => {
  const options = { width: 1800, height: 900, backgroundColor: 0xffffff }
  return (
    <main className="flex justify-center items-center h-screen p-12">
      <PixiCanvas
        className="max-w-full bg-white max-h-full"
        {...options}
        script={DragonNeckScript}
      />
    </main>
  )
}

DragonNeckTemplate.displayName = 'DragonNeck'

export default DragonNeckTemplate
