import "./input-detail.scss";

const InputDetail = ({required, ...props}) =>{

  return(
    <label className="detail-label">
      Feedback Detail
      <span className="detail-label__span">Include any specific comments on what should be improved, added, etc.</span>

      <textarea className="detail-label__input" type="text" placeholder="text" required {...props} />
      <span className={`warn-span `}>{required? "Can’t be empty" : ""}</span>
    </label>
  )
}

export default InputDetail;
