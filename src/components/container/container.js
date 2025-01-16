import "./container.scss";

const Container = ({ className = "", ...props }) => {
  return <div className={`container ${className}`} {...props}></div>;
};

export default Container;
