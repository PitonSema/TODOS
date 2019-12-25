import {
  ADD_TASK,
  FETCH_TASK,
  GET_TASK,
  DELETE_TASK,
  EDIT_TASK,
  CHANGE_TASK_STATUS
} from '../constants'

import { apiTask } from '../api'

export const updatesTask = () => async (dispatch) => {
  try {
    dispatch({ type:FETCH_TASK })

    apiTask.get('/todo').then(res => {
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    })

  } catch(error) {
    console.log(error)
  }
}

export const addTask = ( task ) => async (dispatch) => {
  try {

    dispatch({ type:FETCH_TASK })

    apiTask.post('/todo',{
      title: task,
      description: task,
      done:true
    }).then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      })
    })

  } catch(error) {
    console.log(error)
  }
}

export const deleteTask = ( id, index ) => async (dispatch) => {
  try {

    dispatch({ type:FETCH_TASK })

    apiTask.delete('/todo/'+id
    ).then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    })
    
  } catch(error) {
    console.log(error)
  }
}

export const completedTask = ( id, done )=> async (dispatch) => {
  try{

    dispatch({ type:FETCH_TASK })

    apiTask.put('/todo/'+id,{
      done:done
    }).then(res => {
      dispatch({
        type: CHANGE_TASK_STATUS,
        payload: {done, id}
      })
    })

  } catch(error) {
    console.log(error)
  }
}

export const editTask = (task, id)=> async (dispatch) => {
  try{
    dispatch({ type:FETCH_TASK })

    apiTask.put('/todo/'+id,{
      title: task,
      description: task,
      done:true
    }).then(res => {
      dispatch({
        type:EDIT_TASK,
        payload: {task, id}
      })
    })
  } catch(error) {
    console.log(error)
  }
}