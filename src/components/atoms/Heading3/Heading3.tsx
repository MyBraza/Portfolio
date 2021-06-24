import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type THeading3Props = { children: ReactNode; className?: string }

const Heading3: FC<THeading3Props> = ({
  children,
  className
}: THeading3Props) => {
  const defaultClassName = 'text-xl leading-6 font-sans font-bold'
  return <h3 className={classNames(defaultClassName, className)}>{children}</h3>
}

Heading3.displayName = 'Heading3'

export default Heading3
