import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

type TNavigationLinkProps = {
  children: ReactNode
  path: string
  className?: string
}

const NavigationLink: FC<TNavigationLinkProps> = memo(
  ({ children, path, className }: TNavigationLinkProps) => {
    const defaultClassName = 'text-lg font-mono max-w-max'
    return (
      <div className="has-animated-element cursor-pointer">
        <Link className={classNames(defaultClassName, className)} to={path}>
          {children}
          <div className="animated-underline" />
        </Link>
      </div>
    )
  }
)

NavigationLink.displayName = 'NavigationLink'

export default NavigationLink
