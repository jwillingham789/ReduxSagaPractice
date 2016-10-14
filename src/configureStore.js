import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools'
import reducer from './reducers'
import watchFetchData from './sagas/sagas'

var React = require('react')
//required for saga
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const enhancer = compose(
    devTools()
  )
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
   const store = createStore(reducer, initialState, composeEnhancers(
     applyMiddleware(sagaMiddleware)
   ))
  //insert your saga middleware root function below...
  sagaMiddleware.run(watchFetchData)
  return store;
}
