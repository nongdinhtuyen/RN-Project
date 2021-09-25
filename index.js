/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './src/components/Home';
import { name as appName } from './app.json';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/config/router';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';

import reducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas/root_saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  })
  : compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens(store);
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'CampaignScreen'
            }
          }
        ]
      }
    }
  })
})

