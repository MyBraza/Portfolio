import { Heading } from '@components/atoms'
import { IconFileCodeSolid } from '@images'
import React, { FC, memo } from 'react'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => (
  <main>
    <div className='flex flex-col gap-y-2 max-w-min'>
      <Heading className="ml-16 whitespace-nowrap">
        Hello.
        <br />I am Ismail
      </Heading>
      <div className="flex justify-end items-center gap-x-8">
        <div className="flex justify-center items-center w-12">
          <IconFileCodeSolid className="outlined-svg" />
        </div>
        <div className="text-xl leading-6">
          Programmer, <br />
          Frontend - <br />
          Developer
        </div>
      </div>
    </div>
  </main>
))

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
