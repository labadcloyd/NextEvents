import classes from './comment-list.module.css';

function CommentList(props) {
  const {comments} = props;
  if(!comments){
    return<p>
      ...loading
    </p>
  }
  return (
    <ul className={classes.comments}>
      {
        comments.map((data)=>{
        const {name, comment, id} = data
        return(
          <div key={id}>
            <li >
              <p>{comment}</p>
              <div>
                By <address>{name}</address>
              </div>
            </li>
          </div>
        )
      })}
    </ul>
  );
}

export default CommentList;