import CategoryRadio from "../category-radio/category-radio";
import "./category-filter.scss";
import "../../sass/general.scss"
import FilterBox from "../filter-box/filter-box";

const CategoryFilter = () => {

  return(

  <FilterBox className="category__wrap__filter">
    
    <h2 className="category__wrap__filter-title visually-hidden">Categories</h2>
    <div className="category__wrap__filter-inner">
    <CategoryRadio name="category" value="all">All</CategoryRadio>
    <CategoryRadio name="category" value="ui">UI</CategoryRadio>
    <CategoryRadio name="category" value="ux">UX</CategoryRadio>
    <CategoryRadio name="category" value="enhancement">Enhancement</CategoryRadio>
    <CategoryRadio name="category" value="bug">Bug</CategoryRadio>
    <CategoryRadio name="category" value="feature">Feature</CategoryRadio>
    </div>

  </FilterBox>
  )
}
export default CategoryFilter;