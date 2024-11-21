import "./status-category.scss";
import { forwardRef, useState } from "react";
import SelectPopup from "../select-popup/select-popup";
import UpvotSvg from "../upvote-svg/upvote-svg";






const StatusCategory = forwardRef((proporties, ref) => {

const {statusoptions=[], value, ...props} = proporties

  // console.log(+value);
  
  const [isSortOpen, setSortOpen] = useState(false);
  // const [sortValue, setSortValue] = useState(statusoptions[0]?.value);

  const toggleSortPopup = () => {
    setSortOpen(!isSortOpen);
  };

  const handleCategoryChange = (evt) => {
    evt.preventDefault();

    const values = +evt.target.value;

    // setSortValue(values);

    setSortOpen(false);
  };



  return (
    <div className="edit-category-wrap">
      <p className="title-label">
      Update Status
        <span className="title-label__span">
        Change feature state
        </span>
      </p>

      <div className="option__btn-wrap">
        <button type="button" className="option-btn" onClick={toggleSortPopup}>
          {statusoptions?.find((option) => option?.value === +value)?.status}
        </button>
        <UpvotSvg className="option-svg" isOpen={isSortOpen} />
      </div>

      <SelectPopup
        className="edit-category-wrap__popup"
        ref={ref}
        onOptionChange={handleCategoryChange}
        // checkedValue={sortValue}
        value={+value}
        isOpen={isSortOpen}
        options={statusoptions}
        width="456px"
      { ...props}
      />
    </div>
  );
})
export default StatusCategory;
