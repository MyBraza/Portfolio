import React, { FC, memo, useCallback } from 'react'
import { Image, PlainText } from '@components/atoms'
import classNames from 'classnames'
import { AnimatedHeading } from '@components/molecules'
import { withHoverAnimation } from '@hocs'
import { TTextContent } from '@config'

type TProjectItemProps = {
  description: TTextContent
  name: string
  image: string
  isReversed?: boolean
  path?: string
  className?: string
}

const ProjectItem: FC<TProjectItemProps> = memo(
  ({
    name,
    image,
    className,
    isReversed,
    path,
    description
  }: TProjectItemProps) => {
    const defaultClassName = 'flex flex-col lg:flex-row flex-grow justify-center gap-8'

    const routeChange = useCallback(() => {
      if (path) window.open(path, '_blank')
    }, [])

    const ImageWithAnimation = withHoverAnimation(Image)

    return (
      <div className={classNames(defaultClassName, className)}>
        <div className={`${isReversed && 'lg:order-last'} max-w-md px-4 md:px-0`}>
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
          className="px-4 lg:px-0 mb-4 lg:mr-4 object-cover h-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg cursor-pointer"
        />
      </div>
    )
  }
)

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
