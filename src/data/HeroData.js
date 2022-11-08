import img1 from "../components/assets/svg/Deal.svg";
import img2 from "../components/assets/svg/Connection.svg";
import img3 from "../components/assets/svg/ChartUp.svg";
export const heroOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Founded in 2012",
  },
  headline: "We've been in business for 9 years",
  description:
    "We have designed and implemented the best cloud security solutions",
  buttonLabel: "Find More",
  imgStart: "start",
  // img: img1,
  img: {
    src: img1,
    // height: "56px",
    width: "90%",
  },
  start: "true",
};

export const heroTwo = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Designed & Developed",
  },
  headline: "The best practices",
  description: "Our clients have had the best experience working with us",
  buttonLabel: "View Project",

  linkTo: "/more",
  imgStart: "start",
  // img: img2,
  img: {
    src: img2,
    // height: "56px",
    width: "650px",
  },
  start: "true",
};

export const heroThree = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Highly reputed brand",
  },
  headline: "Why us? ",
  description:
    "Our 9 year experience have allowed us to use the most innovative technologies and methodologies",
  buttonLabel: "View Project",

  linkTo: "/download",
  imgStart: "",
  // img: img3,
  img: {
    src: img3,
    // height: "50%",
    width: "90%",
  },
  start: "true",
};
