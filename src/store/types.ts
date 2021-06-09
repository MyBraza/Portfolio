import { TOGGLE_DARK_THEME } from '@store/actionTypes'

export interface IAppState {
  dark: boolean
}

export interface IToggleDarkThemePayload {
  dark: boolean
}

export type TToggleDarkTheme = {
  type: typeof TOGGLE_DARK_THEME
  payload: IToggleDarkThemePayload
}

export type TActions = TToggleDarkTheme
