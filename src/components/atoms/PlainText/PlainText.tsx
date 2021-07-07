import React, { FC } from 'react'
import classNames from 'classnames'
import { TTextContent } from '@config'
import { useSelector } from 'react-redux'
import { getLanguageSelector } from '@store/selectors'

type TPlainTextProps = { children: TTextContent; className?: string }

const PlainText: FC<TPlainTextProps> = ({
  children,
  className
}: TPlainTextProps) => {
  const defaultClassName = 'text-lg font-bold dark:text-dim'

  const language = useSelector(getLanguageSelector)

  return (
    <p className={classNames(defaultClassName, className)}>
      {children[language]}
    </p>
  )
}

PlainText.displayName = 'PlainText'

export default PlainText
