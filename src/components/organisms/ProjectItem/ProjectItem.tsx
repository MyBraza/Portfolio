import React, { FC, memo, ReactNode, useCallback } from 'react'
import { PlainText } from '@components/atoms'
import classNames from 'classnames'
import { AnimatedHeading } from '@components/molecules'
import { WithHoverAnimation } from '@components/organisms'

type TProjectItemProps = {
  children: ReactNode
  name: string
  image: string
  reverse?: boolean
  path?: string
  className?: string
}

const ProjectItem: FC<TProjectItemProps> = memo(
  ({ name, image, className, reverse, path, children }: TProjectItemProps) => {
    const defaultClassName = 'flex flex-grow justify-center gap-x-8'

    const routeChange = useCallback(() => {
      if (path) window.location.href = path
    }, [])

    return (
      <div className={classNames(defaultClassName, className)}>
        <div className={`${reverse && 'order-last'} max-w-md`}>
          <AnimatedHeading onClick={routeChange} className="mb-4 w-5/6">
            {name}
          </AnimatedHeading>
          <div className="flex justify-end">
            <PlainText className="w-5/6">{children}</PlainText>
          </div>
        </div>
        <WithHoverAnimation className="max-w-lg cursor-pointer ml-4">
          <img
            src={image}
            alt={name}
            onClick={routeChange}
            className="mb-4 mr-4 object-cover	h-full"
          />
        </WithHoverAnimation>
      </div>
    )
  }
)

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
