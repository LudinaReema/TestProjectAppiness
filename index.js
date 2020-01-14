/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/appNavigator';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {name as appName} from './app.json';
import reducers from './app/reducer';

console.disableYellowBox = true;
export const store = createStore(reducers, {});
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
