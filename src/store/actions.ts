import { TOGGLE_DARK_THEME } from '@store/actionTypes'
import { IToggleDarkThemePayload, TToggleDarkTheme } from '@store/types'

export const toggleDarkTheme = (payload: IToggleDarkThemePayload): TToggleDarkTheme => ({
  type: TOGGLE_DARK_THEME,
  payload
})
