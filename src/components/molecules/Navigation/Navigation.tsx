import React, { FC, ReactNode } from 'react'

type TNavigationProps = {
  children: ReactNode
}

const Navigation: FC<TNavigationProps> = ({ children }: TNavigationProps) => (
  <nav className="flex items-center justify-end gap-x-8">{children}</nav>
)

Navigation.displayName = 'Navigation'

export default Navigation
