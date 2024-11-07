import { useState } from "react";
import SelectPopup from "../select-popup/select-popup";
import UpvotSvg from "../upvote-svg/upvote-svg";
import "./input-category.scss";

const options = [
  {
    text: "Feature",
    value: 1,
  },
  {
    text: "UI",
    value: 2,
  },
  {
    text: "UX",
    value: 3,
  },
  {
    text: "Enhancement",
    value: 4,
  },
  {
    text: "Bug",
    value: 5,
  },
];

const InputCategory = () => {
  const [isSortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState(options[0]?.value);

  const toggleSortPopup = () => {
    setSortOpen(!isSortOpen);
  };

  const handleCategoryChange = (evt) => {
    const values = +evt.target.value;

    setSortValue(values);

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
        <button className="option-btn" onClick={toggleSortPopup}>
          {options.find((option) => option.value == +sortValue).text}
        </button>
        <UpvotSvg className="option-svg" isOpen={isSortOpen} />
      </div>

      <SelectPopup
        className="add-category-wrap__popup"
        onChange={handleCategoryChange}
        defaultValue={sortValue}
        isOpen={isSortOpen}
        options={options}
        name="add"
        width="456px"
      />
    </div>
  );
};
export default InputCategory;
