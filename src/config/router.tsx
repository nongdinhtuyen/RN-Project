import React from 'react'
import { Navigation, NavigationFunctionComponent } from "react-native-navigation";
import { Provider } from 'react-redux';
import HomeScreen from '../components/Home';
import CampaignScreen from '../components/Campaign';

const WrapScreen = (ReduxScreen: NavigationFunctionComponent, store: any) => (props: any) => (
  <Provider store={store}>
    <ReduxScreen {...props} />
  </Provider>
)

export default function registerScreens(store: any) {

  Navigation.registerComponent(
    'HomeScreen',
    () => WrapScreen(HomeScreen ,store),
    () => HomeScreen,
  )

  Navigation.registerComponent(
    'CampaignScreen',
    () => WrapScreen(CampaignScreen ,store),
    () => CampaignScreen,
  )

}