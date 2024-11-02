import "./category.scss"

const Category = ({className="", ...props}) => {

  return(
    <span className={`category ${className}`} {...props}/>
  )
}
export default Category;