import "./edit-feedback.scss";

import { useNavigate, useParams } from "react-router-dom";
import InputTitle from "../../components/input-title/input-title";
import GoBackLink from "../../components/goback-link/goback-link";
import InputCategory from "../../components/input-category/input-category";
import InputDetail from "../../components/input-detail/input-detail";
import Button from "../../components/button/button";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/context-data";
import StatusCategory from "../../components/status-category/status-category";

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

const statusOptions = [
  {
    status: "planned",
    value: 6,
  },
  {
    status: "suggestion",
    value: 7,
  },
  {
    status: "in-progress",
    value: 8,
  },
  {
    status: "live",
    value: 9,
  },
];

const warning = [
  { name: "detailValue", error: "Can’t be empty" },
  { name: "inputValue", error: "musn't be empty" },
];

const EditFeedback = () => {
  const { id } = useParams();

  const { data, setData, originalData, setOriginalData } = useData();

  const navigate = useNavigate();

  const optionRef = useRef([]);
  const stausOptionRef = useRef([]);

  // const defaultCategoryValue = +optionRef.current[0]?.defaultValue;
  // const defaultStatusValue = +stausOptionRef.current[0]?.defaultValue;
  // const detailRef = useRef();
  // const titleRef = useRef();

  const [formData, setFormData] = useState({
    inputValue: "",
    popupValue: "",
    statusPopupValue: "",
    detailValue: "",
  });

  const [error, setError] = useState([]);
  const [titleError, setTitleError] = useState([]);

  useEffect(() => {
    const editFeedback = data.productRequests.find(
      (product) => product.id == id
    );


    if (editFeedback) {
      setFormData({
        inputValue: editFeedback.title || "",
        popupValue:
          options.find((opt) => opt.text === editFeedback.category)?.value ||
          "",
        statusPopupValue:
          statusOptions.find((opt) => opt.status === editFeedback.status)
            ?.value || "",
        detailValue: editFeedback.description || ""
      });
    }
  }, [id, data?.productRequests]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const editFeedbackIndex = data.productRequests.findIndex(
      (product) => product.id == id
    );

    const findCategory = options.find(
      (option) => option.value === +formData.popupValue
    );

    const findStatus = statusOptions.find(
      (option) => option.value === +formData.statusPopupValue
    );

    const editFeedback = data.productRequests.find(
      (product) => product.id == id
    );

    if (formData.inputValue.trim() && formData.detailValue.trim()) {
      const newData = {
        id: +id,
        title: formData.inputValue,
        category: findCategory?.text,
        upvotes: editFeedback?.upvotes,
        status: findStatus?.status,
        description: formData.detailValue,
        comments: [],
        isLiked: editFeedback.isLiked
      };

      const newProductRequests = [
        ...data.productRequests.slice(0, editFeedbackIndex),
        newData,
        ...data.productRequests.slice(editFeedbackIndex + 1),
      ];

      setOriginalData([
        ...originalData.slice(0, editFeedbackIndex),
        newData,
        ...originalData.slice(editFeedbackIndex + 1),
      ]);

      setData({
        ...data,
        productRequests: newProductRequests
      });

      navigate("/");
    }

    setError(!formData.detailValue?.trim() ? warning : []);
    setTitleError(!formData.inputValue?.trim() ? warning : []);
  };




  const handleDeleteClick = () => {

    
    const showEditFeedbackIndex = originalData.findIndex(
      (product) => product.id == id
    );
    
    const editFeedbackIndex = data.productRequests.findIndex(
      (product) => product.id == id
    );

    setOriginalData([
      ...originalData.slice(0, showEditFeedbackIndex),
      ...originalData.slice(showEditFeedbackIndex + 1),
    ])

    
    const updateData = [
      ...data.productRequests.slice(0, editFeedbackIndex),
      ...data.productRequests.slice(editFeedbackIndex + 1),
    ];


    setData({
      ...data,
      productRequests: updateData
    });
    navigate("/");
  };

  return (
    <section className="add-section">
      <GoBackLink className="add-section__link" />
      <div className="add-container edit-container">
        <h1 className="add-section__title">
          Editing ‘Add a dark theme option’
        </h1>

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
            value={+formData.popupValue}
          />

          <StatusCategory
            onChange={handleChange}
            ref={stausOptionRef}
            name="statusPopupValue"
            statusoptions={statusOptions}
            value={+formData.statusPopupValue}
          />

          <InputDetail
            name="detailValue"
            value={formData.detailValue || ""}
            onChange={handleChange}
            showError={error}
          />

          <div className="edit-btn-wrap">
            <Button
              className="delete-btn"
              onClick={handleDeleteClick}
              type="click"
            >
              Delete
            </Button>

            <Button
              className="edit-cancel-btn"
              onClick={() => navigate("/")}
              type="button"
            >
              Cancel
            </Button>

            <Button className="add-added-btn edit-btn" type="submit">
              Add Feedback
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default EditFeedback;
