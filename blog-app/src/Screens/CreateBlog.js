import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateBlog = ({ navigation }) => {
  const { state, addBlog } = useContext(BlogContext)

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlog(title, content, () => navigation.navigate('Home'))
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateBlog
