import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type THeading2Props = { children: ReactNode; className?: string }

const Heading2: FC<THeading2Props> = ({
  children,
  className
}: THeading2Props) => {
  const defaultClassName = 'text-xl leading-6 font-mono select-none'
  return <h2 className={classNames(defaultClassName, className)}>{children}</h2>
}

Heading2.displayName = 'Heading2'

export default Heading2
