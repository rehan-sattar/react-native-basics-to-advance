import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as blogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editBlog } = useContext(blogContext)
  const id = navigation.getParam('id')
  // finding the post to edit.
  const post = state.find(blog => blog.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: post.title, content: post.content }}
      onSubmit={(title, content) => {
        editBlog(id, title, content, () => navigation.pop())
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
