import { combineReducers } from 'redux'
import exampleReducer from './reducers/example'

export const initialStore = {
  example: {
    number: 5
  }
}

const rootReducer = combineReducers({
  example: exampleReducer
})

export default rootReducer