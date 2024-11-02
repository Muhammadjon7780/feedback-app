import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";

import "./button.scss";


const ElLink = (props) => <Link {...props}></Link>;

const ElBtn = forwardRef((props, ref) => <button ref={ref} {...props} ></button>);

const Button = forwardRef((proporties, ref) => {
  
  
  const{ to, className="", ...props } = proporties

  const Component = to ? ElLink : ElBtn;

  return (
    <>
      <Component ref={ref}
      to={to}  {...props}
      className={`button ${className}`} />
    </>
  )
})


export default Button;