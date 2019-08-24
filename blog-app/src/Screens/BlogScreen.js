import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Context as blogContext } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const BlogScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(blogContext)

  const blogPost = state.find(blog => blog.id === id)

  return (
    <View>
      <Text> {blogPost.title} </Text>
      <Text> {blogPost.content} </Text>
    </View>
  )
}

BlogScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', { id: navigation.getParam('id') })
      }
    >
      <FontAwesome name='edit' size={25} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  )
})

export default BlogScreen
