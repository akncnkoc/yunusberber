import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import NavigationContainerBase from './src/navigation/NavigationContainerBase';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainerBase />
    </Provider>
  );
};

export default App;
