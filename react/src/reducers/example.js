import TYPE from '../actions/types'
import { initialStore } from '../store'


export default (example = initialStore.example, action) => {
  switch (action.type) {
    case TYPE.EXAMPLE.ADD: {
      return [...example]
    }
    default: {
      return example
    }
  }
}