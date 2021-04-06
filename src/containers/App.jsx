import { connect } from 'react-redux';
import Commentaries from '../components/commentaries/commentariesSection/Commentaries';
import { addComment, deleteComment } from '../redux/actions/commentariesAction';
import './App.css';

function App(props) {
  const {deleteComment, addComment, comments} = props
  return (
    <div className="App">
      <div className="appWrapper">
        <Commentaries deleteComment={deleteComment} addComment={addComment} comments={comments} />
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    comments: store.commentaries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (name, comment) => dispatch(addComment(name, comment)),
    deleteComment: id => dispatch(deleteComment(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
