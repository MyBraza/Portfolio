import React, { FC, ReactNode } from 'react'

type TNavigationProps = {
  children: ReactNode
}

const Navigation: FC<TNavigationProps> = ({ children }: TNavigationProps) => (
  <nav className="flex flex-grow flex-col sm:flex-row sm:justify-end items-center gap-2 sm:gap-x-8">{children}</nav>
)

Navigation.displayName = 'Navigation'

export default Navigation
