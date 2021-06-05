import React, { FC, memo } from 'react'
import { Navigation } from '@components/molecules'
import { NavigationLink, ThemeTumbler } from '@components/atoms'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => (
  <header className="flex flex-grow justify-end items-end max-h-20 px-10">
    <Navigation>
      <NavigationLink path="">Hello world!</NavigationLink>
      <NavigationLink className='mr-4' path="">Hello world!!</NavigationLink>
      <ThemeTumbler />
    </Navigation>
  </header>
))

Header.displayName = 'Header'

export default Header
