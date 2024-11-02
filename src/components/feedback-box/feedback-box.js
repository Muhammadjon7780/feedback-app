import "./feedback-box.scss";

const FeedbackBox = ({children, className=""}) =>{

  return(
    <div className={`feedback-box ${className}`}>
      {children}
    </div>
  )
}
export default FeedbackBox;