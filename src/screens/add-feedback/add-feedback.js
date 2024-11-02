import "./add-feedback.scss";
import { useParams } from "react-router-dom";
import InputTitle from "../../components/input-title/input-title";
import SelectPopup from "../../components/select-popup/select-popup";
import { useData } from "../../contexts/context-data";
import { useState } from "react";
import GoBackLink from "../../components/goback-link/goback-link";

const AddFeedback = () => {

  const {data} = useData();

  const [isSortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState(data.productRequests[0]?.id);
// console.log(data.productRequests[0]?.id);

  const toggleSortPopup = () => {
    setSortOpen(!isSortOpen);
  };

  const handleCategoryChange = (evt) => {
    const values = +evt.target.value;
    console.log(values);
    
    setSortValue(values);

    setSortOpen(false);
  }


  const options = data.productRequests.map((request) => ({
    text: request.category,
    value: +request.id
  }));


  return(
    <section className="add-section">
      <GoBackLink className="add-section__link" />
      <div className="add-container">

      <h1 className="add-section__title">Create New Feedback</h1>
      <InputTitle />

      <button onClick={toggleSortPopup} className="category-button">
          Category: <span>{options.find(option => option.value == +sortValue)?.label}</span>
        </button>

      <SelectPopup 
      className="add-container__popup"
      onChange={handleCategoryChange}
      defaultValue={sortValue}
      isOpen={isSortOpen}
      options={options}
      name="add"
      width="456px"
      />

      </div>
    </section>

  
  )
}
export default AddFeedback;