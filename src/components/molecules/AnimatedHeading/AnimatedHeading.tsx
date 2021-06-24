import React, { FC, ReactNode } from 'react'
import { Heading, Heading2, Heading3 } from '@components/atoms'
import classNames from 'classnames'

type TAnimatedHeadingProps = {
  onClick?: () => void
  children: ReactNode
  HeadingType?: typeof Heading | typeof Heading2 | typeof Heading3
  className?: string
}

const AnimatedHeading: FC<TAnimatedHeadingProps> = ({
  onClick,
  className,
  HeadingType = Heading2,
  children
}: TAnimatedHeadingProps) => {
  const defaultClassName = 'has-animated-element cursor-pointer'
  return (
    <div className={classNames(defaultClassName, className)} onClick={onClick}>
      <HeadingType className="max-w-max">
        {children}
        <div className="animated-underline" />
      </HeadingType>
    </div>
  )
}

AnimatedHeading.displayName = 'AnimatedHeading'

export default AnimatedHeading
