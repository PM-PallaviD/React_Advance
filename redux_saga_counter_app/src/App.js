import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';
import { watchIncrementAsync } from './sagas/counterSaga';

// Create Redux store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrementAsync);

// App component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
