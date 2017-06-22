import { combineReducers } from 'redux-immutable'

export default combineReducers({
  modal: require('./reducers/modal').default
})

