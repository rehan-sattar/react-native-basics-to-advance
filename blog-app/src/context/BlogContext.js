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
    case 'delete_post':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

const addBlog = dispatch => (title, content, callback) => {
  dispatch({ type: 'add_blog', payload: { title, content } })
  callback()
}

const deletePost = dispatch => id =>
  dispatch({ type: 'delete_post', payload: id })

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deletePost },
  // []
  // for devlopment environment, use some default initial state
  [{ id: 1, title: 'Testing post', content: 'Welcome to the testing post' }]
)
