import React, { FC, memo, ReactNode } from 'react'
import { Heading2, PlainText } from '@components/atoms'
import classNames from 'classnames'

type TProjectItemProps = {
  children: ReactNode
  name: string
  image: string
  className: string
}

const ProjectItem: FC<TProjectItemProps> = memo(
  ({ name, image, className, children }: TProjectItemProps) => {
    const defaultClassName = 'flex flex-grow justify-center gap-x-8'
    return (
      <div className={classNames(defaultClassName, className)}>
        <div>
          <div className="mb-4">
            <Heading2 className="w-5/6">{name}</Heading2>
          </div>
          <div className="flex justify-end">
            <PlainText className="w-5/6">{children}</PlainText>
          </div>
        </div>
        <div className='max-w-lg'>
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
)

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
