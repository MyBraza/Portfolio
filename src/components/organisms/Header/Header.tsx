import React, { FC, memo } from 'react'
import { Navigation } from '@components/molecules'
import { NavigationLink, ThemeTumbler } from '@components/atoms'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {

  return (
    <>
      <header className="fixed flex justify-end items-end min-w-full h-24 px-10 pb-6 bg-gradient-to-b from-ivory dark:from-eerie">
        <Navigation>
          <NavigationLink path="top">Home</NavigationLink>
          <NavigationLink path="projects">Projects</NavigationLink>
          <ThemeTumbler className="ml-4" />
        </Navigation>
      </header>
      <div className="mb-24" />
    </>
  )
})

Header.displayName = 'Header'

export default Header
