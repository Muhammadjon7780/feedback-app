import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({...props}) => {
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState([]);

  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setFetched(true)
      fetch(`/data.json`)
      .then((response) => response.json())
      .then((fetchData) => {
        
        const productRequests = fetchData.productRequests.map(product => ({
            ...product,
            isLiked:false
          }))

          setData({...fetchData, productRequests});
          
          setOriginalData([...productRequests])
        });
        
      }
    }, [isFetched]);
    

  if (!data) {
    return null;
  }

  return (
  <DataContext.Provider value={{data, setData, originalData, setOriginalData}} {...props}>
  
  </DataContext.Provider>
  )
};  

  export const useData = () => {
    return useContext(DataContext)
  }

export default DataProvider