import React, { forwardRef } from "react";
import "./select-popup.scss";

const SelectPopup = forwardRef(({
  className="",
  onOptionChange,
  isOpen,
  options,
  // checkedValue,
  value,
  width = "300px",
  ...props
}, ref) => {

  
  
  return (

    <ul
      onChange={onOptionChange}
      style={{ width }}
      className={`select-popup ${className} ${
        isOpen ? "select-popup--opened" : ""
      }`}
    >

      {options.map((option, index) => (
        <li key={option.value} className="select-popup__item">
          <label className="select-popup__option-label">
            <input
              className="select-popup__option visually-hidden"
              ref={(el) => {
                if (ref && ref.current) {
                  ref.current[index] = el;
                }
              }}
              // defaultChecked={value === option.value}
              checked={value === option.value}
              defaultValue={option.value}
              type="radio"
              {...props}
            />
            {option.text || option.status}
            <span className="select-popup__option-tick"></span>
          </label>
        </li>
      ))}
    </ul>
  );
});

export default SelectPopup;
