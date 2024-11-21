import Category from "../category/category";
import { useData } from "../../contexts/context-data";
import "./category-radio.scss";
import "../../sass/general.scss";
// import _ from 'lodash';
const CategoryRadio = ({ children, ...props }) => {
  const { data, setData, originalData } = useData();


// const [originalData, setOriginalData] = useState([]);


// useEffect(() => {
//   if (data.productRequests && originalData.length === 0) {
//     setOriginalData([...data.productRequests]);

//     // setOriginalData(JSON.parse(JSON.stringify(data.productRequests)));
//     // const showData = _.cloneDeep(data.productRequests); 
//     // setOriginalData(showData);



//   }

// }, [data.productRequests])


  const handleInputChange = (evt) => {
    const categoryValue = evt.target.value;
    
    const filteredData = originalData?.filter((product) => {
       
      if(categoryValue === "all") return true 
        return product.category === categoryValue
    })

        setData({
          ...data,
          productRequests: filteredData
        })
  }

  
  
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
