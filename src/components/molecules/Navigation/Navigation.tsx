import React, { FC, memo, ReactNode } from 'react'

type TNavigationProps = {
  children: ReactNode
}

const Navigation: FC<TNavigationProps> = memo(
  ({ children }: TNavigationProps) => (
    <nav className="fixed flex items-baseline justify-end gap-x-8">{children}</nav>
  )
)

Navigation.displayName = 'Navigation'

export default Navigation
