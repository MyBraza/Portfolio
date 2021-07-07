import React, { FC, memo, useCallback } from 'react'
import { Image, PlainText } from '@components/atoms'
import classNames from 'classnames'
import { AnimatedHeading } from '@components/molecules'
import { withHoverAnimation } from '@hocs'

type TProjectItemProps = {
  description: string
  name: string
  image: string
  reverse?: boolean
  path?: string
  className?: string
}

const ProjectItem: FC<TProjectItemProps> = memo(
  ({
    name,
    image,
    className,
    reverse,
    path,
    description
  }: TProjectItemProps) => {
    const defaultClassName = 'flex flex-grow justify-center gap-x-8'

    const routeChange = useCallback(() => {
      if (path) window.open(path, '_blank')
    }, [])

    const ImageWithAnimation = withHoverAnimation(Image)

    return (
      <div className={classNames(defaultClassName, className)}>
        <div className={`${reverse && 'order-last'} max-w-md`}>
          <AnimatedHeading onClick={routeChange} className="mb-4 w-5/6">
            {name}
          </AnimatedHeading>
          <div className="flex justify-end">
            <PlainText className="w-5/6">{description}</PlainText>
          </div>
        </div>
        <ImageWithAnimation
          src={image}
          alt={name}
          onClick={routeChange}
          className="mb-4 mr-4 object-cover	h-full max-w-lg cursor-pointer"
        />
      </div>
    )
  }
)

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
