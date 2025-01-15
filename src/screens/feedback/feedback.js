import { Link, useParams } from "react-router-dom";
import { useData } from "../../contexts/context-data";
import GoBackLink from "../../components/goback-link/goback-link";
import FeedbackBox from "../../components/feedback-box/feedback-box";
import UpvoteButton from "../../components/upvote-button/upvote-button";
import Category from "../../components/category/category";
import Comment from "../../components/comment/comment";
import "./feedback.scss";
import Container from "../../components/container/container";
import Button from "../../components/button/button";
import AvatarImg from "../../components/avatar-img/avatar-img";
import FilterBox from "../../components/filter-box/filter-box";
import ReplyButton from "../../components/reply-button/reply-button";
import PostReply from "../../components/post-reply/post-reply";
import CommentBox from "../../components/comment-box/comment-box";

const Feedback = () => {
  const { id } = useParams();

  const { data } = useData();

  const post = data.productRequests.find((post) => post.id == id);

  return (
    <Container>
      <section className="feedback">
        <div className="feedback__link-box">
          <GoBackLink />
          <Button className="feedback__edit-link" to={`/edit/${post.id}`}>
            Edit Feedback
          </Button>
        </div>
        <FeedbackBox className="feedback__page-wrap" key={post.id}>
          <div className="feedback-box__inner">
            <UpvoteButton
              data-id={post?.id}
              className={`feedback-box__inner-upvote-btn ${
                post.isLiked ? "upvote-btn__liked" : ""
              }`}
            >
              {post.upvotes}
            </UpvoteButton>

            <div className="feedback-title-box">
              <h3 className="feedback-inner__title">{post.title}</h3>
              <p className="feedback-desc">{post.description}</p>
              <Category data-filter-id={post.id}>{post.category}</Category>
            </div>

            <Comment>{post.comments?.length || 0}</Comment>
          </div>
        </FeedbackBox>

        {post.comments ? (
          <section className="feedback-comment">
            <p className="comment-number">
              {post.comments ? post.comments?.length + " Comments" : ""}
            </p>
            <div className="comment-section">
              {post.comments?.map((comment) => (

                <CommentBox 
                className="comment" 
                dataItem={comment} 
                key={comment.id} 
                />
              ))}
            </div>

            <div className="reply-section">
              {post.comments?.map((comment) =>
                comment.replies?.map((reply, index) => (
                  <CommentBox dataItem={reply} key={index} />
                ))
              )}
            </div>

          </section>
        ) : (
          []
        )}
            <div className="add-comment">
              <h3 className="add-comment__title">Add Comment</h3>
              <PostReply className="add-comment__content"/>
            </div>
      </section>
    </Container>

    //     {/* <>
    // <section>
    // {<span>{post && post.title}</span>
    //       <h2>Recomended Fedbacks</h2>

    //       <ul>
    //         {data.productRequests.map((element) =>

    //         <li key={element.id}>
    //           <Link to={`feedback/${element.id}`}>{element.title}</Link>
    //         </li>)}

    //       </ul>
    //     </section> }

    //     </> */}
  );
};

export default Feedback;
