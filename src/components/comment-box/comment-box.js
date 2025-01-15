import AvatarImg from "../avatar-img/avatar-img";
import PostReply from "../post-reply/post-reply";
import ReplyButton from "../reply-button/reply-button";
import "./comment-box.scss";

const CommentBox = ({className="", isOpen, dataItem}) =>{

  return(
    <div 
    className={`reply ${className}`}>
    <div className="reply__user-info">
      <AvatarImg className="reply__user-info__avatar" />
      <div className="reply__user-info__details">
        <p className="reply__user-info__name">
          {dataItem?.user.name}
        </p>
        <p className="reply__user-info__username">
          @{dataItem?.user.username}
        </p>
      </div>
    <ReplyButton onClick={isOpen}/>
    </div>
    <p className="reply__content">
      {dataItem.replyingTo? <span className="reply__content__replying-to">@{dataItem?.replyingTo} </span> : ""} 
       { dataItem?.content}
    </p>
  <PostReply/>
  </div>
  )
}
export default CommentBox;