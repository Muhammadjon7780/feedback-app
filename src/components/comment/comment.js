import "./comment.scss";

const Comment = ({ children, ...props }) => {
  return (
    <>
      <div className="comment-box">
        <span className="comment-box__icon"></span>
        <span className="comment-box__count" {...props}>
          {children}
        </span>
      </div>
    </>
  );
};
export default Comment;
