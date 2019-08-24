import React, { useState } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
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
      <Button title='Add Post' onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: { title: '', conent: '' }
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
export default BlogPostForm
