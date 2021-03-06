import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventid } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();

  useEffect(async ()=>{
    if(showComments){
      axios.get(`/api/comments/${eventid}`)
        .then((response)=>{
          setComments(response.data)
        })
    }
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    await axios.post(`/api/comments/${eventid}`, {commentData})
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;