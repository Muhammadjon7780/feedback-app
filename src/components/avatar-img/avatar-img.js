import "./avatar-img.scss";
import userImg1xWebp from "../../assets/images/user-img-1x-webp.webp";
import userImg2xWebp from "../../assets/images/user-img-2x-webp.webp";

import userImg1xSvg from "../../assets/images/user-img.svg";

import userImg1xPng from "../../assets/images/user-img-1x-png.png";
import userImg2xPng from "../../assets/images/user-img-2x.png";
import userImgJpeg from "../../assets/images/user-img-jpeg.jpg";

const AvatarImg = ({className=""}) => {

  return(
    <picture className={`avatar ${className}`}>
    <source srcSet={userImg1xSvg} type="image/svg+xml" />
    <source srcSet={`${userImg1xPng} 1x,  ${userImg2xPng} 2x`} type="image/png" />
    <img src={userImgJpeg} alt="user-img" width="40" height="40" />
    {/* <source srcSet={`${userImg1xWebp} 1x, ${userImg2xWebp} 2x`} type="image/webp" /> */}
  </picture>
  )
}
export default AvatarImg;

