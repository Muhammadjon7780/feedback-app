import Category from "../category/category";
import { useData } from "../../contexts/context-data";
import "./category-radio.scss";
import "../../sass/general.scss";
import { useEffect, useState } from "react";

const CategoryRadio = ({ children, ...props }) => {
  const { data, setData } = useData();

const [originalData, setOriginalData] = useState(data.productRequests);

useEffect(() => {
  if (data.productRequests && originalData.length === 0) {
    setOriginalData(data.productRequests);
  }

}, [data.productRequests, originalData.length])

  const handleInputChange = (evt) => {
    const categoryValue = evt.target.value
    console.log(categoryValue);
    
    const filteredData = originalData?.filter((product) => {
      if (product.category === categoryValue) {
        return product;
      }
      if(categoryValue === "all"){

        return true;
      }
      return false
    })
    console.log(filteredData);
    
    setData({
      ...data,
      productRequests: filteredData
    })
  };
  
  return (
    <label className="category-label">
      <input
        onChange={handleInputChange}
        className="category-radio visually-hidden"
        type="radio"
        {...props}
      />
      <Category className="category-radio__text" children={children} />
    </label>
  );
};
export default CategoryRadio;
