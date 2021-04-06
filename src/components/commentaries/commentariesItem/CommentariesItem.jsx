import s from './CommentariesItem.module.scss'
const CommentariesItem = ({name, date, time, commentary, deleteComment}) => {
  return (
    <div className={s.item}>
      <div className={s.textHeader}>
      <div className={s.picture}></div>
        <div className={s.name}>{name}</div>
        <div className={s.date}>
          <div><span>{date}</span>,&nbsp;</div>
          <div>{time}</div>
        </div>
        <button onClick={deleteComment} className={s.delete}></button>
      </div>
      <div className={s.text}>{commentary}</div>
    </div>
  )
}

export default CommentariesItem
