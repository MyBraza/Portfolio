import { IAppState } from '@store/types'
import { createSelector } from 'reselect'

const getDarkTheme = (state: IAppState) => state.dark

export const getDarkThemeSelector = createSelector(getDarkTheme, (dark) => dark)
