import "./add-feedback.scss";
import InputTitle from "../../components/input-title/input-title";
import GoBackLink from "../../components/goback-link/goback-link";
import InputCategory from "../../components/input-category/input-category";
import InputDetail from "../../components/input-detail/input-detail";
import Button from "../../components/button/button";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/context-data";
import { useNavigate } from "react-router-dom";

const options = [
  {
    text: "feature",
    value: 1,
  },
  {
    text: "ui",
    value: 2,
  },
  {
    text: "ux",
    value: 3,
  },
  {
    text: "enhancement",
    value: 4,
  },
  {
    text: "bug",
    value: 5,
  },
];

const warning = [
  { name: "detailValue", error: "Can’t be empty" },
  { name: "inputValue", error: "musn't be empty" },
];

const AddFeedback = () => {
  const { data, setData, originalData, setOriginalData } = useData();

  const navigate = useNavigate();

  const optionRef = useRef([]);
  const defaultValue = +optionRef.current[0]?.defaultValue;

  const [formData, setFormData] = useState({
    inputValue: "",
    popupValue: options[0]?.value,
    detailValue: "",
  });

  const [error, setError] = useState([]);
  const [titleError, setTitleError] = useState([]);

  // const [originalData, setOriginalData] = useState(data.productRequests);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const findCategory = options.find(
      (option) => option.value === +formData.popupValue
    );

    if (formData.inputValue.trim() && formData.detailValue.trim()) {
      const newData = {
        id: Math.floor(Math.random() * 1000),
        title: formData.inputValue,
        category: findCategory.text,
        upvotes: 0,
        status: "suggestion",
        description: formData.detailValue,
        comments: [],
      };

      const newProductRequests = [newData, ...data.productRequests];

      setOriginalData([newData, ...originalData]);

      setData({
        ...data,
        productRequests: newProductRequests,
      });

      navigate("/");
    }

    setError(!formData.detailValue?.trim() ? warning : []);
    setTitleError(!formData.inputValue?.trim() ? warning : []);
  };

  return (
    <section className="add-section">
      <GoBackLink className="add-section__link" />
      <div className="add-container">
        <h1 className="add-section__title">Create New Feedback</h1>

        <form onSubmit={handleSubmit} action="#" method="post">
          <InputTitle
            name="inputValue"
            value={formData.inputValue || ""}
            onChange={handleChange}
            showTitleError={titleError}
          />

          <InputCategory
            onChange={handleChange}
            ref={optionRef}
            name="popupValue"
            options={options}
            value={formData.popupValue}
          />

          <InputDetail
            name="detailValue"
            value={formData.detailValue || ""}
            onChange={handleChange}
            showError={error}
          ></InputDetail>

          <div className="add-btn-wrap">
            <Button
              className="add-cancel-btn"
              onClick={() => navigate("/")}
              type="button"
            >
              Cancel
            </Button>

            <Button className="add-added-btn" type="submit">
              Add Feedback
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AddFeedback;
