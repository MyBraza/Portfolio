import { Heading, Heading2, PlainText } from '@components/atoms'
import { IconFileCodeSolid } from '@images'
import React, { FC, memo } from 'react'
import { ItemWithIcon } from '@components/organisms'

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
    <div className="flex flex-grow justify-center mb-8">
      <PlainText className="w-1/2">
        I love to learn and improve my skills. Despite the fact that I have
        little real work experience, I have been doing programming for three
        years already. Passed the course on Yandex.Praktikum "Middle Frontend
        Developer". In addition to deepening the existing skills, I gained
        experience working with React, Redux, setting up the environment and
        project deployment.
      </PlainText>
    </div>
    <div className="flex flex-grow justify-center mb-8">
      <PlainText className="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut
        dignissimos eos laborum minus mollitia nostrum quisquam rem similique
        veniam. Ad adipisci aliquam architecto aut beatae consequatur delectus
        dicta dignissimos dolor dolore doloremque ducimus facere hic id ipsum
        iure iusto laboriosam laborum maxime minus molestiae molestias neque
        nisi officiis pariatur perferendis provident quam quas reprehenderit sed
        tempore, tenetur vero voluptates! Ad asperiores nostrum perspiciatis
        quidem rerum tempore ullam voluptatibus? Dolor dolorem eius eveniet
        expedita fugit impedit perspiciatis, quisquam. Atque eligendi excepturi
        itaque neque officia quam qui quos? Aut, autem culpa dignissimos
        doloremque est iste nostrum possimus quidem quis repellat soluta?
      </PlainText>
    </div>
  </main>
))

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
