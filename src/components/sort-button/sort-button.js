import "./sort-button.scss";

const SortButton = ({className="", children, isOpen, ...props}) =>{

  return(
    <div className="sort-btn-wrap">
      <button className={`sort-button ${className}`} {...props}> 
        {children}
        </button>
        <span className={`sort-button__arrow ${isOpen? "sort-button__arrow--opened" :"sort-button__arrow--closed"}`}></span>
    </div>
  )
}

export default SortButton;