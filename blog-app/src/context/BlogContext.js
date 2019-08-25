import React from 'react'
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

// reducer for blogs
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload
    case 'edit_blog':
      return state.map(blog =>
        blog.id === action.payload.id ? action.payload : blog
      )
    case 'delete_blog':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

const getBlogPosts = dispatch => async () => {
  try {
    const response = await jsonServer.get('/blogPosts')
    dispatch({ type: 'get_posts', payload: response.data })
  } catch (e) {}
}

const addBlog = dispatch => async (title, content, callback) => {
  const response = await jsonServer.post('/blogPosts', {
    title,
    content
  })
  if (callback) {
    callback()
  }
}

const deletePost = dispatch => id =>
  dispatch({ type: 'delete_blog', payload: id })

const editBlog = dispatch => (id, title, content, callback) => {
  dispatch({ type: 'edit_blog', payload: { id, title, content } })
  if (callback) {
    callback()
  }
}
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deletePost, editBlog, getBlogPosts },
  []
)
