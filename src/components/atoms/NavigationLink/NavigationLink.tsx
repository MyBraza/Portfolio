import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-scroll'
import classNames from 'classnames'

type TNavigationLinkProps = {
  children: ReactNode
  path: string
  className?: string
}

const NavigationLink: FC<TNavigationLinkProps> = memo(
  ({ children, path, className }: TNavigationLinkProps) => {
    const defaultClassName = 'has-animated-element cursor-pointer text-lg font-mono max-w-max'
    return (
      <Link
        activeClass="active"
        className={classNames(defaultClassName, className)}
        to={path}
        offset={-50}
        spy
        smooth
      >
        {children}
        <div className="animated-underline" />
      </Link>
    )
  }
)

NavigationLink.displayName = 'NavigationLink'

export default NavigationLink
