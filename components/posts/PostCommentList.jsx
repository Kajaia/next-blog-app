export default function PostCommentList({ comments }) {
  return (
    <div className="col-12 text-start my-3">
      <h3>Comments: {comments.length}</h3>
      <div className="row g-3">
        {comments.map((comment) => {
          <div key={comment.id} className="col-12">
            <div className="card rounded-3">
              <div className="card-header">
                <h6 className="mb-0">{comment.name}</h6>
              </div>
              <div className="card-body">
                <p className="lead mb-0">{comment.body}</p>
              </div>
              <div className="card-footer">
                <small>Author email: {comment.email}</small>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
