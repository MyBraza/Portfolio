import React, { FC, memo, useEffect, useState } from 'react'
import { Navigation } from '@components/molecules'
import { NavigationLink, ThemeTumbler } from '@components/atoms'
import { Dropdown, IDropdownOption } from '@components/organisms'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '@store/actions'
import { TGisLanguage, TLanguage } from '@config'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Русский' }
  ]

  const dispatch = useDispatch()

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
    dispatch(changeLanguage({ language: language }))
  }, [language])

  return (
    <>
      <header className="sm:fixed flex items-end min-w-full h-32 px-4 sm:px-10 pb-10 bg-gradient-to-b from-ivory dark:from-eerie">
        <Navigation>
          <div className='flex gap-x-2 w-full sm:w-auto sm:gap-x-8'>
            <NavigationLink path="about">Home</NavigationLink>
            <NavigationLink path="projects">Projects</NavigationLink>
          </div>
          <div className='flex gap-x-2 w-full sm:w-auto sm:gap-x-8 justify-end'>
            <Dropdown
              options={languages}
              className="w-24 pb-2 text-right"
              optionsClassName="flex flex-grow justify-end bg-ivory dark:bg-eerie"
              defaultOption={languages.find(
                (option) => option.value === language
              )}
              onChange={changeCurrentLanguage}
            />
            <ThemeTumbler className="ml-4" />
          </div>
        </Navigation>
      </header>
      <div className="sm:mb-24" />
    </>
  )
})

Header.displayName = 'Header'

export default Header
