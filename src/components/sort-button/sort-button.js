import UpvotSvg from "../upvote-svg/upvote-svg";
import "./sort-button.scss";

const SortButton = ({className="", children, isOpen, ...props}) =>{

  return(
    <div className="sort-btn-wrap">
      <button className={`sort-button ${className}`} {...props}> 
        {children}
        </button>
        <UpvotSvg className="sort-button__arrow" isOpen={isOpen}/>
    </div>
  )
}

export default SortButton;