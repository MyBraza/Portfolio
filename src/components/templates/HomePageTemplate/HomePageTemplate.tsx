import { Heading, Heading2, PlainText } from '@components/atoms'
import {
  IconFileCodeSolid,
  MessengerScreenshot,
  PotatozationOfMarsScreenshot
} from '@images'
import React, { FC, memo } from 'react'
import { ItemWithIcon } from '@components/organisms'
import { ProjectItem } from '@components/molecules'
import { PATHS, ABOUTME, PROJECTS } from '@config'
import { useSelector } from 'react-redux'
import { getLanguageSelector } from '@store/selectors'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => {
  const language = useSelector(getLanguageSelector)

  return (
    <main className="flex flex-col">
      <div id="about" className="flex flex-col gap-y-2 max-w-min mb-32">
        <Heading className="ml-4 lg:ml-16 whitespace-pre">
          {language === 'en' ? 'Hello.\nI am Ismail' : 'Привет\n  Я Исмаил'}
        </Heading>
        <ItemWithIcon
          className="ml-4 lg:justify-end"
          icon={IconFileCodeSolid}
          iconSize="4"
          outlinedSVG
        >
          <Heading2 className="whitespace-pre">
            {language === 'en'
              ? 'Programmer,\nFrontend -\nDeveloper'
              : 'Программист,\nФронтенд -\nРазработчик'}
          </Heading2>
        </ItemWithIcon>
      </div>
      <div className="flex flex-grow justify-center mb-96 px-4 md:px-32">
        <PlainText className="max-w-screen-lg text-justify">
          {ABOUTME.info}
        </PlainText>
      </div>
      <div id="projects">
        <div className="flex flex-grow justify-end pr-8 md:pr-16 mb-32">
          <Heading className='whitespace-pre'>
            {language === 'en'
              ? 'Standalone\nprojects'
              : 'Ссылки \nна проекты'}
          </Heading>
        </div>
        <div className="flex flex-grow justify-center mb-32">
          <ProjectItem
            name="Potatozation of Mars"
            image={PotatozationOfMarsScreenshot}
            path={PATHS.POTATOZATION_OF_MARS}
            className="max-w-max text-justify"
            description={PROJECTS.POTATOZATION_OF_MARS.description}
          />
        </div>
        <div className="flex flex-grow justify-center mb-32">
          <ProjectItem
            name="Messenger"
            image={MessengerScreenshot}
            path={PATHS.MESSENGER}
            isReversed
            className="max-w-max text-justify"
            description={PROJECTS.MESSENGER.description}
          />
        </div>
      </div>
    </main>
  )
})

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
