import Immutable from 'immutable'
import { action } from './'


export const open = action('modal', 'open', {
  expectedParams: ['header','message', 'buttonActionText', 'style']
})
export const openModal = open
export const close = action('modal', 'close', {
  expectedParams: []
})
export const closeModal = close

const initialState = Immutable.fromJS({
  open: false,
  header: '',
  message: '',
  buttonActionText: '',
  style: {}
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case open.id:
      return state.merge({open: true, ...open.getParams(action)})
    case close.id:
      return state.set('open', false)
    default:
      return state
  }
}