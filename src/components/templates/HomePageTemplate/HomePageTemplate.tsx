import { Heading } from '@components/atoms'
import React, { FC, memo } from 'react'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(
  () => (
    <main className="flex flex-col">
      <Heading className='ml-16'>Hello.<br/>I am Ismail</Heading>
    </main>
  )
)

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
