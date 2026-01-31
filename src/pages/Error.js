import { Link } from "react-router-dom";
import img from "../assets/images/not-found1.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh,Page Not Found</h3>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
