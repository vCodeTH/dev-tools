import { combineReducers } from 'redux'
import example from './reducers/example'

export const initialStore = {
  example: []
}

const rootReducer = combineReducers({
  example
})

export default rootReducer