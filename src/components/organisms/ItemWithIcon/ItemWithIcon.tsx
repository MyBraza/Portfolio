import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface IconProps {
  style: { [key: string]: string }
  className: string
}

type TItemWithIconProps = {
  children: ReactNode
  className?: string
  icon: FC<IconProps>
  iconSize?: string | number
  outlinedSVG?: boolean
}

const ItemWithIcon: FC<TItemWithIconProps> = ({
  children,
  className,
  icon,
  outlinedSVG = false,
  iconSize = 2
}: TItemWithIconProps) => {
  const IconElement = icon
  const defaultClassName = 'flex items-center gap-x-12'
  return (
    <div className={classNames(defaultClassName, className)}>
      <IconElement
        style={{ height: `${iconSize}rem` }}
        className={`${outlinedSVG && 'outlined-svg stroke-current'}`}
      />
      {children}
    </div>
  )
}

ItemWithIcon.displayName = 'ItemWithIcon'

export default ItemWithIcon
