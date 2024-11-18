import { forwardRef, useRef, useState } from "react";
import "./input-detail.scss";




const InputDetail = forwardRef((proporties, ref) =>{

  const {required, showError, name, ...props} = proporties;
  
  
  return(
    <>
    <label className="detail-label">
      Feedback Detail
      <span className="detail-label__span">Include any specific comments on what should be improved, added, etc.</span>

      <textarea 
      className={`detail-label__input ${showError?.length ? "error-title__show" : ""}`}
      ref={ref} 
      type="text"
      placeholder="text"
      required={required}
      name={name}
      {...props} />
        
      <span className={`error-title`}>
        {showError?.find((element) => element.name == name)?.error || ""}
      </span>

    </label>
      
      </>
  )
})

export default InputDetail;
