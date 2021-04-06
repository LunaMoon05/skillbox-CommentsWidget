import s from './Commentaries.module.scss'
import CommentariesList from './CommentariesList.jsx'
import React, { useState } from 'react'

const Commentaries = ({ deleteComment, addComment, comments }) => {
  const [nameValue, setNameValue] = useState('')
  const [commentValue, setCommentValue] = useState('')
  const [nameError, setNameError] = useState('Это поле не должно быть пустым')
  const [commentError, setCommentError] = useState('Это поле не должно быть пустым')
  const [nameBlur, setNameBlur] = useState(false)
  const [commentBlur, setCommentBlur] = useState(false)
  const isContainNumber = (string) => {
    return /[0-9]/.test(string)
  }
  const resetState = () => {
    setNameValue('')
    setCommentValue('')
    setNameError('Это поле не должно быть пустым')
    setCommentError('Это поле не должно быть пустым')
    setNameBlur(false)
    setCommentBlur(false)
  }
  const addCommentHandler = () => {
    setNameBlur(true)
    setCommentBlur(true)
    if (!nameError && !commentError && nameBlur && commentBlur) {
      addComment(nameValue, commentValue)
      resetState()
    }
  }
  const nameHandler = e => {
    let value = e.target.value
    setNameValue(value)
    if (isContainNumber(value)) {
      setNameError('Имя не должно содержать цифр')
    } else if (value.length < 2) {
      setNameError('Имя должно содержать не менее двух символов')
    } else if (!isContainNumber(value) && !value.length < 2) {
      setNameError('')
    }
  }
  const commentHandler = e => {
    let value = e.target.value
    setCommentValue(value)
    if (value.length < 3) {
      setCommentError('Комментарий должен содержать не менее трех символов')
    } else if (!value.length < 3) {
      setCommentError('')
    }
  }
  return (
    <>
      <div className={s.form}>
        <div isvalid={(nameError && nameBlur) ? 'false' : 'true'} className={s.inputWrapper}>
          <div className={s.error}>{nameError}</div>
          <input
            className={s.input}
            type="text"
            value={nameValue}
            onBlur={() => setNameBlur(true)}
            onChange={e => nameHandler(e)}
            placeholder="Введите свое имя..." />
        </div>
        <div isvalid={(commentError && commentBlur) ? 'false' : 'true'} className={s.inputWrapper}>
          <div className={s.error}>{commentError}</div>
          <textarea
            className={s.textarea}
            value={commentValue}
            onBlur={() => setCommentBlur(true)}
            onChange={e => commentHandler(e)}
            placeholder="Введите комментарий..."></textarea>
        </div>
        <button onClick={addCommentHandler} className={s.button}>Отправить комментарий</button>
      </div>
      <div className={s.list}>
        <CommentariesList deleteComment={deleteComment} comments={comments} />
      </div>
    </>
  )
}

export default Commentaries