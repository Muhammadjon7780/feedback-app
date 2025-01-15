import Button from "../button/button";
import "./post-reply.scss";


const PostReply = ({className=""}) =>{

  return(
    <form className={`reply-form ${className}`} action="#">

    {/* <div className="post-reply"> */}
      <textarea className="reply-form__input" type="text" />
      <Button className="reply-form__btn">Post Reply</Button>
    {/* </div> */}

    </form>
  )
}
export default PostReply;