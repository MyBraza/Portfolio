import { Heading } from '@components/atoms'
import { IconFileCodeSolid } from '@images'
import React, { FC, memo } from 'react'
import { ItemWithIcon } from '@components/organisms'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => (
  <main className="flex flex-col gap-y-2 max-w-min">
    <Heading className="ml-16 whitespace-nowrap">
      Hello.
      <br />I am Ismail
    </Heading>
    <ItemWithIcon outlinedSVG icon={IconFileCodeSolid}>
      Programmer, <br />
      Frontend - <br />
      Developer
    </ItemWithIcon>
  </main>
))

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
