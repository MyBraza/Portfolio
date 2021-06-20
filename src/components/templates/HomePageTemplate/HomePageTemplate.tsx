import { Heading, Heading2, PlainText } from '@components/atoms'
import {
  IconFileCodeSolid,
  MessengerScreenshot,
  PotatozationOfMarsScreenshot
} from '@images'
import React, { FC, memo } from 'react'
import { ItemWithIcon } from '@components/organisms'
import { ProjectItem } from '@components/molecules'
import { PATHS } from '@config'

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
        path={PATHS.POTATOZATION_OF_MARS}
        className="max-w-screen-lg mx32"
      >
        "Potatozation of mars" is a team project of a web application with a
        browser game. In this project, my responsibilities included developing
        the logic and rendering of the game on HTML Canvas, as well as the
        in-game interface. In addition, I was actively involved in the
        development of other parts of the application.
      </ProjectItem>
    </div>
    <div className="flex flex-grow justify-center mb-32">
      <ProjectItem
        name="Messenger"
        image={MessengerScreenshot}
        path={PATHS.MESSENGER}
        reverse
        className="max-w-screen-lg mx32"
      >
        Messenger web application developed during the "Praktikum" course. In
        this project, I created my own design, laid out the pages, configured
        the build, created my own "framework" for working with blocks, and
        deployed the project on Heroku.
      </ProjectItem>
    </div>
  </main>
))

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
