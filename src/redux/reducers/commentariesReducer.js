import getDate from "../../helpers/getDate"
import {ADD_COMMENT, DELETE_COMMENT} from "../consts";

let initialState = [{
  name: 'Разработчик',
  commentary: 'Оставь комментарий!',
  id: 1,
  date: getDate().date,
  time: getDate().time
}]

if (localStorage.getItem('comments')) {
  initialState = JSON.parse(localStorage.getItem('comments'))
}

export const commentariesReducer = (state = initialState, action) => {
  let payload = action.payload
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        name: payload.name,
        date: payload.date,
        time: payload.time,
        id: state.length + 1,
        commentary: payload.commentary
      }
      const newCommentsList = [...state, newComment]
      localStorage.setItem('comments', JSON.stringify(newCommentsList))
      return newCommentsList

    case DELETE_COMMENT:
      const filteredCommentsList = state.filter(item => {
        return item.id !== action.id
      })
      localStorage.setItem('comments', JSON.stringify(filteredCommentsList))
      return filteredCommentsList

    default:
      return state
  }
}