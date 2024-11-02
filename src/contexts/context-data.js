import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({...props}) => {
  const [data, setData] = useState(null);
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setFetched(true)
      fetch(`/data.json`)
      .then((response) => response.json())
      .then((data) => setData({
        ...data,
        productRequests: data.productRequests.map(product => ({
            ...product,
            isLiked:false
          }
        ))
      }));
      
    }
  }, [isFetched]);

  if (!data) {
    return null;
  }

  return (
  <DataContext.Provider value={{data, setData}} {...props}>
  
  </DataContext.Provider>
  )
};  

  export const useData = () => {
    return useContext(DataContext)
  }

export default DataProvider