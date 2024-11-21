import { useData } from "../../contexts/context-data";
import UpvotSvg from "../upvote-svg/upvote-svg";
import "./upvote-button.scss";

const UpvoteButton = ({ children, className, ...props }) => {
  
  const { data, setData, originalData, setOriginalData } = useData();

  const handleLikeClick = (evt) => {
    const clickedId = +evt.target.dataset.id;
    
    const neededProduct = data.productRequests.find((product) => product.id === clickedId);
    
    const changedProduct = {
      ...neededProduct,
      isLiked:!neededProduct.isLiked,
      upvotes: !neededProduct.isLiked? neededProduct.upvotes + 1 : neededProduct.upvotes - 1
    }
    

    
    const showChangedProductIndex = originalData.findIndex(product => product.id === clickedId)
    
    setOriginalData([
      ...originalData.slice(0, showChangedProductIndex),
      changedProduct,
      ...originalData.slice(showChangedProductIndex + 1)
    ])
    
    const changedProductIndex = data.productRequests.findIndex(product => product.id === clickedId)
    
    setData({
      ...data,
      productRequests:[
        ...data.productRequests.slice(0, changedProductIndex),
        changedProduct,
        ...data.productRequests.slice(changedProductIndex + 1)
      ]
    })
    
  }; 


  return (
    <button onClick={handleLikeClick} className={`upvote-btn ${className}`} {...props}>
      <UpvotSvg className={`upvote-btn__svg ${className}`}></UpvotSvg>
      {children}
    </button>
  );
};

export default UpvoteButton;
