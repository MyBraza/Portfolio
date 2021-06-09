import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type THeadingProps = { children: ReactNode; className?: string }

const Heading: FC<THeadingProps> = memo(
  ({ children, className }: THeadingProps) => {
    const defaultClassName = 'text-9xl font-mono'
    return (
      <h1 className={classNames(defaultClassName, className)}>{children}</h1>
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
