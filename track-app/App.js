import React from "react"
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation"
import SigninScreen from "./src/SigninScreen"
import SignupScreen from "./src/SignupScreen"
import AccountScreen from "./src/AccountScreen"
import TrackCreateScreen from "./src/TrackCreateScreen"
import TrackDetailScreen from "./src/TrackDetailScreen"
import TrackListScreen from "./src/TrackListScreen"

const swithNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: {
      TrackList: TrackListScreen,
      TrackCreate: TrackCreateScreen
    },
    TrackDetail: TrackDetailScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(swithNavigator)
