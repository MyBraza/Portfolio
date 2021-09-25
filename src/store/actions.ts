import { CHANGE_LANGUAGE, TOGGLE_DARK_THEME } from '@store/actionTypes'
import {
  IChangeLanguagePayload,
  IToggleDarkThemePayload,
  TChangeLanguage,
  TToggleDarkTheme
} from '@store/types'

export const toggleDarkTheme = (
  payload: IToggleDarkThemePayload
): TToggleDarkTheme => ({
  type: TOGGLE_DARK_THEME,
  payload
})

export const changeLanguage = (
  payload: IChangeLanguagePayload
): TChangeLanguage => ({
  type: CHANGE_LANGUAGE,
  payload
})
