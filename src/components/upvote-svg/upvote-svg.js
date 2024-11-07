import "./upvote-svg.scss";


const UpvotSvg = ({className="", isOpen, ...props}) => {
  return (
    <svg
      className={`icon ${className} ${isOpen? "sort-button__arrow--opened" :"sort-button__arrow--closed"}`}
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="icon-path"
        d="M1 6L5 2L9 6"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default UpvotSvg;
