import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider } from './src/context/BlogContext'
import BlogScreen from './src/Screens/BlogScreen'
import HomeScreen from './src/Screens/HomeScreen'
import CreateBlog from './src/Screens/CreateBlog'
import EditScreen from './src/Screens/EditScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Blog: BlogScreen,
    Create: CreateBlog,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Welcome to Blog App'
    }
  }
)

const App = createAppContainer(navigator)

export default () => (
  <Provider>
    <App />
  </Provider>
)
