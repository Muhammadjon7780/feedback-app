import "./input-title.scss";

const InputTitle = ({ showTitleError, ...props }) => {
  return (
    <label className="title-label">
      Feedback Title
      <span className="title-label__span">
        Add a short, descriptive headline
      </span>
      <input
        className={`title-input ${
          showTitleError.length ? "title-input--show" : ""
        }`}
        type="text"
        placeholder="text"
        {...props}
      />
    </label>
  );
};

export default InputTitle;
