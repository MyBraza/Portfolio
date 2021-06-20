import React, { FC, memo, ReactNode } from 'react'
import { Heading2 } from '@components/atoms'
import classNames from 'classnames'

type TAnimatedHeadingProps = {
  onClick?: () => void
  children: ReactNode
  className?: string
}

const AnimatedHeading: FC<TAnimatedHeadingProps> = memo(
  ({ onClick, className, children }: TAnimatedHeadingProps) => {
    const defaultClassName = 'has-animated-element cursor-pointer'
    return (
      <div
        className={classNames(defaultClassName, className)}
        onClick={onClick}
      >
        <Heading2 className="max-w-max">
          {children}
          <div className="animated-underline" />
        </Heading2>
      </div>
    )
  }
)

AnimatedHeading.displayName = 'AnimatedHeading'

export default AnimatedHeading
