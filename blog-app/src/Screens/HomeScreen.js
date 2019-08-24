import React, { useContext } from 'react'
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Context as BlogContext } from '../context/BlogContext'

const HomeScreen = ({ navigation }) => {
  const { state, deletePost } = useContext(BlogContext)
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: blog }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Blog', { id: blog.id })}
          >
            <View style={styles.listContainer}>
              <Text style={styles.title}>
                {blog.title} - {blog.id}
              </Text>
              <TouchableOpacity onPress={() => deletePost(blog.id)}>
                <FontAwesome style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <FontAwesome name='plus' size={20} style={{ marginRight: 10 }} />
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: 'black'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default HomeScreen
