import React, { FC, memo, useEffect, useState } from 'react'
import { SunIcon } from '@images'
import { useDispatch, useSelector } from 'react-redux'
import { getDarkThemeSelector } from '@store/selectors'
import { toggleDarkTheme } from '@store/actions'

type TThemeTumblerProps = {}

const DARK_THEME_CLASS = 'dark'

const ThemeTumbler: FC<TThemeTumblerProps> = memo(() => {
  const dispatch = useDispatch()
  const dark = useSelector(getDarkThemeSelector)

  if (!window.localStorage.dark) {
    window.localStorage.dark = 'true'
  }

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    return window.localStorage.dark === 'true'
  })

  const toggleTheme = () => {
    setIsDarkTheme((value) => !value)
    dispatch(toggleDarkTheme({ dark: isDarkTheme }))
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add(DARK_THEME_CLASS)
      window.localStorage.dark = 'false'
    } else {
      document.documentElement.classList.remove(DARK_THEME_CLASS)
      window.localStorage.dark = 'true'
    }
  }, [isDarkTheme, dark])

  return (
    <>
      <div>
        <div
          className="flex justify-center items-center w-8 h-8 p-1 rounded-full bg-black cursor-pointer duration-200 dark:bg-white"
          onClick={toggleTheme}
        >
          <SunIcon className="fill-current text-white dark:hidden" />
        </div>
      </div>
    </>
  )
})

ThemeTumbler.displayName = 'ThemeTumbler'

export default ThemeTumbler
