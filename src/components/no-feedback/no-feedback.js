import Button from "../button/button";
import "./no-feedback.scss";

const NoFeedback = () => {
  return (
    <div className="no-feedback">
      <div className="no-feedback__image"></div>
      <div className="no-feedback-content">
        <h2 className="no-feedback-content__title">
          There is no feedback yet.
        </h2>
        <p className="no-feedback-content__desc">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button to="/add-feedback" className="no-feedback__btn">
          + Add Feedback
        </Button>
      </div>
    </div>
  );
};
export default NoFeedback;
