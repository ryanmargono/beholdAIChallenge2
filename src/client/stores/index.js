import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import data from './data/DataReducer'
import diseases from './disease/DiseaseReducer'

const rootReducer = combineReducers({
    data,
    diseases
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
      )
    )
  )

export default store