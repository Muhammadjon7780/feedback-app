import { useData } from "../../contexts/context-data";
import Button from "../button/button";
import SelectPopup from "../select-popup/select-popup";
import SortButton from "../sort-button/sort-button";
import "./header.scss";
import { useState } from "react";

const sortOptions = [
  {
    text: "Most Upvotes",
    value: 1,
  },
  {
    text: "Least Upvotes",
    value: 2,
  },
  {
    text: "Most Comments",
    value: 3,
  },
  {
    text: "Least Comments",
    value: 4,
  },
];

const Header = () => {
  const { data, setData } = useData();

  const [isSortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState(1);

  const handleSortClick = () => {
    setSortOpen(!isSortOpen);
  };

  const handleOptionChange = (evt) => {
    const values = +evt.target.value;
    setSortValue(values);

    setSortOpen(false);

    const sortedProductRequests = [...data.productRequests].sort((a, b) => {
      switch (values) {
        case 1:
          return b.upvotes - a.upvotes;
        case 2:
          return a.upvotes - b.upvotes;
        case 3:
          return (b.comments?.length || 0) - (a.comments?.length || 0);
        case 4:
          return (a.comments?.length || 0) - (b.comments?.length || 0);
        default:
          return 0;
      }
    });

    setData({
      ...data,
      productRequests: sortedProductRequests,
    });
  };

  return (
    <header className="header">
      <span className="header-span">
        {data.productRequests.length} Suggestions
      </span>
      <SortButton
        className="header-button"
        onClick={handleSortClick}
        isOpen={isSortOpen}
      >
        Sort by:{" "}
        <span className="sort-button__strong">
          {" "}
          {sortOptions.find((option) => option.value === +sortValue).text}
        </span>
      </SortButton>
      <Button to="/add-feedback" className="header-add-btn">
        + Add Feedback
      </Button>
      <SelectPopup
        onChange={handleOptionChange}
        defaultValue={sortValue}
        isOpen={isSortOpen}
        options={sortOptions}
        name="sort"
        width="255px"
      />
    </header>
  );
};
export default Header;
