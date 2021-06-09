import React, { FC, memo, ReactNode } from 'react'

interface IconProps {
  className: 'outlined-svg' | false
}

type TItemWithIconProps = {
  children: ReactNode
  outlinedSVG?: boolean
  icon: React.FC<IconProps>
}

const ItemWithIcon: FC<TItemWithIconProps> = memo(
  ({ children, outlinedSVG = false, icon }: TItemWithIconProps) => {
    const IconElement = icon
    return (
      <div className="flex justify-end items-center gap-x-12">
        <div className="flex justify-center items-center w-12">
          <IconElement className={outlinedSVG && 'outlined-svg'} />
        </div>
        <div className="text-xl leading-6">{children}</div>
      </div>
    )
  }
)

ItemWithIcon.displayName = 'ItemWithIcon'

export default ItemWithIcon
