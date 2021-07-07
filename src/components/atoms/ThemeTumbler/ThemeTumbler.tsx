import React, { FC, memo, useEffect, useState } from 'react'
import { IconSun } from '@images'
import { useDispatch, useSelector } from 'react-redux'
import { getDarkThemeSelector } from '@store/selectors'
import { toggleDarkTheme } from '@store/actions'

type TThemeTumblerProps = {
  className?: string
}

const DARK_THEME_CLASS = 'dark'

const ThemeTumbler: FC<TThemeTumblerProps> = memo(
  ({ className }: TThemeTumblerProps) => {
    const dispatch = useDispatch()
    const dark = useSelector(getDarkThemeSelector)

    if (!window.localStorage.dark) {
      window.localStorage.dark = 'true'
    }

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
      window.localStorage.dark === 'true'
    )

    const toggleTheme = () => {
      setIsDarkTheme((value) => !value)
      dispatch(toggleDarkTheme({ dark: isDarkTheme }))
    }

    useEffect(() => {
      if (isDarkTheme) {
        document.documentElement.classList.add(DARK_THEME_CLASS)
        window.localStorage.dark = 'true'
      } else {
        document.documentElement.classList.remove(DARK_THEME_CLASS)
        window.localStorage.dark = 'false'
      }
    }, [isDarkTheme, dark])

    return (
      <div className={className}>
        <div
          className="relative flex justify-center items-center w-8 h-8 transition duration-500 ease-in-out overflow-hidden rounded-full bg-black cursor-pointer dark:bg-eerie"
          onClick={toggleTheme}
        >
          <IconSun className="tumbler-icon-bright m-1 fill-current text-white" />
          <div className="tumbler-icon-dark absolute bg-eerie rounded-full" />
        </div>
      </div>
    )
  }
)

ThemeTumbler.displayName = 'ThemeTumbler'

export default ThemeTumbler
