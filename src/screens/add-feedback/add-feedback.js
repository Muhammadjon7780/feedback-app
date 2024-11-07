import "./add-feedback.scss";
import InputTitle from "../../components/input-title/input-title";
import GoBackLink from "../../components/goback-link/goback-link";
import InputCategory from "../../components/input-category/input-category";
import InputDetail from "../../components/input-detail/input-detail";
import Button from "../../components/button/button";


const AddFeedback = () => {


  return (
    <section className="add-section">
      <GoBackLink className="add-section__link" />
      <div className="add-container">
        <h1 className="add-section__title">Create New Feedback</h1>
        <form action="#">

        <InputTitle />

        <InputCategory/>

        <InputDetail required="required"/>

      <div className="add-btn-wrap">
        <Button className="add-cancel-btn">Cancel</Button>
        <Button className="add-added-btn" type="submit">Add Feedback</Button>
      </div>
        </form>
      </div>
    </section>
  );
};
export default AddFeedback;
