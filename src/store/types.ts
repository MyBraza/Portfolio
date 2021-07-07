import { TLanguage } from '@config'
import { CHANGE_LANGUAGE, TOGGLE_DARK_THEME } from '@store/actionTypes'

export interface IAppState {
  dark: boolean
  language: TLanguage
}

export interface IToggleDarkThemePayload {
  dark: boolean
}

export interface IChangeLanguagePayload {
  language: TLanguage
}

export type TToggleDarkTheme = {
  type: typeof TOGGLE_DARK_THEME
  payload: IToggleDarkThemePayload
}

export type TChangeLanguage = {
  type: typeof CHANGE_LANGUAGE
  payload: IChangeLanguagePayload
}

export type TActions = TToggleDarkTheme | TChangeLanguage
