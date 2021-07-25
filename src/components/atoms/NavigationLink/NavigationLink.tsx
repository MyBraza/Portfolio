import React, { FC, ReactNode } from 'react'
import { Link as RedirectLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import classNames from 'classnames'

type TNavigationLinkProps = {
  children: ReactNode
  path: string
  redirect?: boolean
  className?: string
}

const NavigationLink: FC<TNavigationLinkProps> = ({
  children,
  path,
  redirect,
  className
}: TNavigationLinkProps) => {
  const defaultClassName =
    'has-animated-element cursor-pointer text-base md:text-lg font-mono max-w-max'
  const Link = redirect ? RedirectLink : ScrollLink
  return (
    <Link
      activeClass="active"
      className={classNames(defaultClassName, className)}
      to={path}
      offset={-100}
      spy
      smooth
    >
      {children}
      <div className="animated-underline" />
    </Link>
  )
}

NavigationLink.displayName = 'NavigationLink'

export default NavigationLink
