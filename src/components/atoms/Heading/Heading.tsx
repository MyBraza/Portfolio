import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type THeadingProps = { children: ReactNode; className?: string }

const Heading: FC<THeadingProps> = ({ children, className }: THeadingProps) => {
  const defaultClassName = 'max-w-min text-2xl sm:text-5xl lg:text-7xl xl:text-9xl font-mono select-none'
  return <h1 className={classNames(defaultClassName, className)}>{children}</h1>
}

Heading.displayName = 'Heading'

export default Heading
