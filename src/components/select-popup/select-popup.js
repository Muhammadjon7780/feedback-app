import "./select-popup.scss";

const SelectPopup = ({className="", onChange, isOpen, options, name, defaultValue, width="300px"}) =>{
  return(
    <ul onChange={onChange} style={{width}} className={`select-popup ${className} ${isOpen? "select-popup--opened" : ""}`} >

      {options.map(option => (

      <li key={option.value} className="select-popup__item">
        <label className="select-popup__option-label">
          <input 
          defaultChecked={defaultValue === option.value}
          defaultValue={option.value} 
          className="select-popup__option visually-hidden" 
          type="radio" 
          name={name}/>
          {option.text}
          <span className="select-popup__option-tick"></span>
        </label>
      </li>

      ))}

    </ul>
  )
}

export default SelectPopup;


