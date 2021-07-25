import React, { FC, memo, useCallback } from 'react'
import { AnimatedHeading } from '@components/molecules'
import { PATHS } from '@config'
import { Heading3 } from '@components/atoms'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => {
  const routeChange = useCallback((path: string) => {
    return () => {
      if (path) window.open(path, '_blank')
    }
  }, [])

  const sendMail = useCallback((email: string) => {
    return () => {
      window.location.href = `mailto:${email}?subject=Test subject&body=Body content`
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row flex-grow justify-between items-center shadow-centered bg-white text-black dark:shadow-none py-10 lg:py-20 px-5 lg:px-40 m-4 gap-4">
      <div className="flex gap-x-4 lg:gap-x-10">
        <AnimatedHeading
          HeadingType={Heading3}
          onClick={routeChange(PATHS.HABR)}
        >
          Habr
        </AnimatedHeading>
        <AnimatedHeading
          HeadingType={Heading3}
          onClick={routeChange(PATHS.GIT)}
        >
          GitHub
        </AnimatedHeading>
        <AnimatedHeading
          HeadingType={Heading3}
          onClick={routeChange(PATHS.HEAD_HUNTER)}
        >
          Head Hunter
        </AnimatedHeading>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-6">
        <div className="text-base lg:text-xl leading-6 font-sans">+7(962)853-23-77</div>
        <AnimatedHeading HeadingType={Heading3} onClick={sendMail(PATHS.EMAIL)}>
          {PATHS.EMAIL}
        </AnimatedHeading>
      </div>
    </div>
  )
})

Footer.displayName = 'Footer'

export default Footer
