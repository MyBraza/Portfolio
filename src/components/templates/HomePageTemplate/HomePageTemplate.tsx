import { Heading, Heading2, PlainText } from '@components/atoms'
import { IconFileCodeSolid, PotatozationOfMarsScreenshot } from '@images'
import React, { FC, memo } from 'react'
import { ItemWithIcon } from '@components/organisms'
import { ProjectItem } from '@components/molecules'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => (
  <main className="flex flex-col">
    <div className="flex flex-col gap-y-2 max-w-min mb-32">
      <Heading className="ml-16 whitespace-nowrap">
        Hello.
        <br />I am Ismail
      </Heading>
      <ItemWithIcon
        className="justify-end"
        icon={IconFileCodeSolid}
        iconSize="16"
        outlinedSVG
      >
        <Heading2>
          Programmer, <br />
          Frontend - <br />
          Developer
        </Heading2>
      </ItemWithIcon>
    </div>
    <div className="flex flex-grow justify-center mb-96 px-32">
      <PlainText className="max-w-screen-lg">
        I love to learn and improve my skills. Despite the fact that I have
        little real work experience, I have been doing programming for three
        years already. Passed the course on Yandex.Praktikum "Middle Frontend
        Developer". In addition to deepening the existing skills, I gained
        experience working with React, Redux, setting up the environment and
        project deployment.
      </PlainText>
    </div>
    <div className="flex flex-grow justify-end pr-16 mb-32">
      <Heading>Standalone projects</Heading>
    </div>
    <div className="flex flex-grow justify-center mb-32">
      <ProjectItem
        name="Potatozation of Mars"
        image={PotatozationOfMarsScreenshot}
        className="max-w-screen-lg mx32"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        delectus error est molestias perspiciatis placeat quam, sunt velit.
        Debitis, tenetur?
      </ProjectItem>
    </div>
  </main>
))

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
