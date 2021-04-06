import getDate from "../../helpers/getDate"
import { ADD_COMMENT, DELETE_COMMENT } from "../consts"

export const addComment = (name, commentary) => {
  return {
    type: ADD_COMMENT,
    payload: {
      name,
      commentary,
      date: getDate().date,
      time: getDate().time
    }
  }
}

export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id
  }
}