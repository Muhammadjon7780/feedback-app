import { Link } from "react-router-dom";
import "./goback-link.scss";
import UpvotSvg from "../upvote-svg/upvote-svg";

const GoBackLink = ({className=""}) => {

  return(
    <div className="back-link__wrap">

      <Link to="/" className={`back-link ${className}`}>
      <UpvotSvg className="back-link__icon" />
      Go Back
      </Link>
    </div>
  )
}

export default GoBackLink;