import "./filter-box.scss";

const FilterBox = ({className="", children}) => {
  
  return(
    <>
    <div className={`filter-box ${className}`}>
    {children}
    </div>
    </>
)
}
export default FilterBox;