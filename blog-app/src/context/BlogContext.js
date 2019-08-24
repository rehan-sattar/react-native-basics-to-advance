import React from 'react'
import createDataContext from './createDataContext'

// reducer for blogs
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          content: action.payload.content
        }
      ]
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

const addBlog = dispatch => (title, content, callback) => {
  dispatch({ type: 'add_blog', payload: { title, content } })
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
  { addBlog, deletePost, editBlog },
  // []
  // for devlopment environment, use some default initial state
  [{ id: 1, title: 'Testing post', content: 'Welcome to the testing post' }]
)
