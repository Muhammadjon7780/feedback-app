import { forwardRef, useState } from "react";
import SelectPopup from "../select-popup/select-popup";
import UpvotSvg from "../upvote-svg/upvote-svg";
import "./input-category.scss";

const InputCategory = forwardRef((proporties, ref) => {
  const { options = [], value, ...props } = proporties;

  const [isSortOpen, setSortOpen] = useState(false);

  const toggleSortPopup = () => {
    setSortOpen(!isSortOpen);
  };

  const handleCategoryChange = (evt) => {
    evt.preventDefault();

    const values = +evt.target.value;

    setSortOpen(false);
  };

  return (
    <div className="add-category-wrap">
      <p className="title-label">
        Category
        <span className="title-label__span">
          Choose a category for your feedback
        </span>
      </p>

      <div className="option__btn-wrap">
        <button type="button" className="option-btn" onClick={toggleSortPopup}>
          {options?.find((option) => option?.value == value)?.text}
        </button>
        <UpvotSvg className="option-svg" isOpen={isSortOpen} />
      </div>

      <SelectPopup
        className="add-category-wrap__popup"
        ref={ref}
        onOptionChange={handleCategoryChange}
        value={+value}
        isOpen={isSortOpen}
        options={options}
        width="456px"
        {...props}
      />
    </div>
  );
});
export default InputCategory;
