import { IAppState } from '@store/types'
import { createSelector } from 'reselect'

const getDarkTheme = (state: IAppState) => state.dark

const getLanguage = (state: IAppState) => state.language

export const getDarkThemeSelector = createSelector(getDarkTheme, (dark) => dark)

export const getLanguageSelector = createSelector(
  getLanguage,
  (language) => language
)
