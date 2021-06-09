import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type THeading2Props = { children: ReactNode; className?: string }

const Heading2: FC<THeading2Props> = memo(
  ({ children, className }: THeading2Props) => {
    const defaultClassName = 'text-xl leading-6 font-mono'
    return (
      <div className={classNames(defaultClassName, className)}>{children}</div>
    )
  }
)

Heading2.displayName = 'Heading2'

export default Heading2
