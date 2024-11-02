import "./input-title.scss";

const InputTitle = () =>{

  return(
    <label className="title-label">
      Feedback Title
      <span className="title-label__span">Add a short, descriptive headline</span>

      <input className="title-input" type="text" placeholder="text" />
    </label>
  )
}

export default InputTitle;