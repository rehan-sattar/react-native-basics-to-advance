import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { setNavigator } from "./src/navigationRef";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import AccountScreen from "./src/Screens/AccountScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import ResolveAuthScreen from "./src/Screens/ResolveAuthScreen";

const switchNavigator = createSwitchNavigator({
  Resolve: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackCreate: TrackCreateScreen
    }),
    TrackDetail: TrackDetailScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => (
  <AuthProvider>
    <App
      ref={navigation => {
        setNavigator(navigation);
      }}
    />
  </AuthProvider>
);
