import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

interface IconProps {
  className: string
}

type TItemWithIconProps = {
  children: ReactNode
  className?: string
  icon: FC<IconProps>
  iconSize?: string | number
  outlinedSVG?: boolean
}

const ItemWithIcon: FC<TItemWithIconProps> = memo(
  ({
    children,
    className,
    icon,
    outlinedSVG = false,
    iconSize = 8
  }: TItemWithIconProps) => {
    const IconElement = icon
    const defaultClassName = 'flex items-center gap-x-12'
    return (
      <div className={classNames(defaultClassName, className)}>
        <IconElement
          className={`h-${iconSize} ${outlinedSVG && 'outlined-svg stroke-current'}`}
        />
        {children}
      </div>
    )
  }
)

ItemWithIcon.displayName = 'ItemWithIcon'

export default ItemWithIcon
