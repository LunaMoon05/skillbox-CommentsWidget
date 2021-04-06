import s from './Commentaries.module.scss'
import CommentariesItem from '../commentariesItem/CommentariesItem.jsx'

const CommentariesList = ({comments, deleteComment}) => {
  const commentsList = comments.map((comment, i) => {
    return <CommentariesItem deleteComment={() => deleteComment(comment.id)} key={i} name={comment.name} date={comment.date} time={comment.time} commentary={comment.commentary} />
  })
  return (
    <div className={s.list}>
      {commentsList.length ? commentsList : <div>комментарии отсутствуют...</div>}
    </div>
  )
}

export default CommentariesList
