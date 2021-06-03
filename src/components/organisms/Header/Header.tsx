import React, { FC, memo } from 'react'
import { Navigation } from '@components/organisms'
import { NavigationLink } from '@components/atoms'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => (
  <header>
    <Navigation>
      <NavigationLink path="">Hello world!</NavigationLink>
      <NavigationLink path="">Hello world!!</NavigationLink>
    </Navigation>
  </header>
))

Header.displayName = 'Header'

export default Header
