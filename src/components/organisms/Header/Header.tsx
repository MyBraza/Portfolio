import React, { FC, memo, useEffect, useState } from 'react'
import { Navigation } from '@components/molecules'
import { NavigationLink, ThemeTumbler } from '@components/atoms'
import { Dropdown, IDropdownOption } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import { getLanguageSelector } from '@store/selectors'
import { changeLanguage } from '@store/actions'
import { TGisLanguage, TLanguage } from '@config'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Русский' }
  ]

  const dispatch = useDispatch()
  const currentLanguage = useSelector(getLanguageSelector)

  if (!window.localStorage.language) {
    window.localStorage.language = 'en'
  }

  const [language, setLanguage] = useState<TLanguage>(
    window.localStorage.language
  )

  const changeCurrentLanguage = (option: IDropdownOption) => {
    if (typeof option.value === 'string' && TGisLanguage(option.value)) {
      setLanguage(option.value)
      dispatch(changeLanguage({ language: option.value }))
    }
  }

  useEffect(() => {
    window.localStorage.language = language
  }, [language, currentLanguage])

  return (
    <>
      <header className="fixed flex justify-end items-end min-w-full h-24 px-10 pb-6 bg-gradient-to-b from-ivory dark:from-eerie">
        <Navigation>
          <NavigationLink path="top">Home</NavigationLink>
          <NavigationLink path="projects">Projects</NavigationLink>
          <Dropdown
            options={languages}
            className="w-24 pb-2 text-right"
            optionsClassName="flex flex-grow justify-end"
            defaultOption={languages.find(
              (option) => option.value === language
            )}
            onChange={changeCurrentLanguage}
          />
          <ThemeTumbler className="ml-4" />
        </Navigation>
      </header>
      <div className="mb-24" />
    </>
  )
})

Header.displayName = 'Header'

export default Header
