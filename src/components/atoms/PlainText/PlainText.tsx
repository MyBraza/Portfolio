import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type TPlainTextProps = { children: ReactNode; className?: string }

const PlainText: FC<TPlainTextProps> = ({
  children,
  className
}: TPlainTextProps) => {
  const defaultClassName = 'text-lg font-bold dark:text-dim'
  return <p className={classNames(defaultClassName, className)}>{children}</p>
}

PlainText.displayName = 'PlainText'

export default PlainText
