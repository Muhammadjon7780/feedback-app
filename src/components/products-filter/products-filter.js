import CategoryFilter from "../category-filter/category-filter"
import RoadMapFilter from "../roadmap-filter/roadmap-filter"

const ProductsFilter = () =>{

  return(
    <form>
      <CategoryFilter/>
      <RoadMapFilter/>
    </form>
  )
}
export default ProductsFilter;