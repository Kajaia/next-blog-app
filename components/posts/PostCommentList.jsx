export default function PostCommentList({ comments }) {
  return (
    <div className="col-12 text-start mt-5 mb-3">
      <h3 className="mb-3">Comments: {comments.length}</h3>
      <div className="row g-3">
        {comments.length &&
          comments.map((comment) => (
            <div key={comment.id} className="col-md-12">
              <div className="card shadow-sm rounded-3">
                <div className="card-header">
                  <h6 className="mb-0">{comment.name}</h6>
                </div>
                <div className="card-body">
                  <p className="mb-0">{comment.body}</p>
                </div>
                <div className="card-footer">
                  <small>Author: {comment.email}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
