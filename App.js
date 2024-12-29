import React from 'react'
import Rootstack from './src/navigation/rootstack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Rootstack></Rootstack>
    </Provider>
  )
}

export default App

