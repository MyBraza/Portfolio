import React, { FC, memo, ReactNode, useCallback } from 'react'
import { Heading2, PlainText } from '@components/atoms'
import classNames from 'classnames'

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
          <div
            className="has-animated-element mb-4 cursor-pointer"
            onClick={routeChange}
          >
            <Heading2 className="w-5/6 max-w-max">
              {name}
              <div className="animated-underline" />
            </Heading2>
          </div>
          <div className="flex justify-end">
            <PlainText className="w-5/6">{children}</PlainText>
          </div>
        </div>
        <div
          className="has-animated-element flex max-w-lg cursor-pointer ml-4"
          onClick={routeChange}
        >
          <div className="flex flex-grow flex-col items-end">
            <img src={image} alt={name} className="mb-4 mr-4 object-cover	h-full" />
            <div className="animated-underline" />
          </div>
          <div className="flex items-end pt-4 h-full">
            <div className="animated-side-border-left" />
          </div>
        </div>
      </div>
    )
  }
)

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
