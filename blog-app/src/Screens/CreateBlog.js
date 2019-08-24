import React, { useState, useContext } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const CreateBlog = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { state, addBlog } = useContext(BlogContext)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}>content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title='Add Post'
        onPress={() =>
          addBlog(title, content, () => {
            navigation.navigate('Home')
          })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10
  }
})

export default CreateBlog
