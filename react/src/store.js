import { combineReducers } from 'redux'
import example from './reducers/example'

export const initialStore = {
  example: {
    number: 20
  }
}

const rootReducer = combineReducers({
  example
})

export default rootReducer