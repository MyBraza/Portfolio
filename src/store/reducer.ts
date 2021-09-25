import { IAppState, TActions } from '@store/types'

const initialState: IAppState = {
  dark: true,
  language: 'en'
}

export default (state = initialState, action: TActions) => {
  switch (action.type) {
    case 'TOGGLE_DARK_THEME':
      return {
        ...state,
        ...action.payload
      }
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
