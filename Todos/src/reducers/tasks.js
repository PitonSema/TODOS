import { GET_TASK, FETCH_TASK, ADD_TASK, DELETE_TASK, EDIT_TASK, CHANGE_TASK_STATUS } from '../constants'

const initialState = {
  isLoading: false,
  data: []
}

export default (state = initialState, action) =>{
  switch (action.type) {

    case FETCH_TASK:
      return{
        ...state,
        isLoading: false
      }

    case ADD_TASK:
      return{
        ...state,
        isLoading: true,
        data:[...state.data, action.payload]
      }

      case DELETE_TASK:
        return {
          data: state.data.filter(item => item._id !== action.payload),
          isLoading: true
        }

      case EDIT_TASK:
        return {
          data: state.data.map((item) => {
            if (item._id === action.payload.id) {
              return {
                ...item,
                title: action.payload.task
              }
            }

            return item
          }),
          isLoading: true
        }

        case CHANGE_TASK_STATUS:
          return{
            data: state.data.map((item) => {
              if (item._id === action.payload.id) {
                return {
                  ...item,
                  done: action.payload.done
                }
                
              }return item
            }),
            isLoading: true
          }

    case GET_TASK:
      return {
        data: action.payload,
        isLoading: true
      }

    default:
      return state
  }

}
