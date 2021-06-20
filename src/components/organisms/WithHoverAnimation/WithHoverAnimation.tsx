import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type TWithHoverAnimationProps = {
  onClick?: () => void
  className?: string
  children: ReactNode
}

const WithHoverAnimation: FC<TWithHoverAnimationProps> = memo(
  ({ onClick, className, children }: TWithHoverAnimationProps) => {
    const defaultClassName = 'has-animated-element flex h-full'
    return (
      <div
        className={classNames(defaultClassName, className)}
        onClick={onClick}
      >
        <div className="flex flex-grow flex-col items-end h-full">
          {children}
          <div className="animated-underline mt-auto" />
        </div>
        <div className="flex items-end pt-4 h-full">
          <div className="animated-side-border-left" />
        </div>
      </div>
    )
  }
)

WithHoverAnimation.displayName = 'WithHoverAnimation'

export default WithHoverAnimation
