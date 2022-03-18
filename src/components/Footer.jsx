import { GiPopcorn } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  const date = new Date();

  return (
    <footer className="py-4 bg-dark text-white mt-auto">
      <div className="row mx-auto">
        <div className="col-12 col-md-4 my-2">
          <p className="m-0 text-center">Contact Us</p>
          <p className="text-warning text-center m-0">
            <GrMail />{" "}
            <em className="text-center">customer.service@sgms.net</em>
          </p>
        </div>
        <div className="col-12 col-md-4 my-2">
          <p className="m-0 d-flex justify-content-center align-items-center">
            <strong className="text-warning">S</strong>
            creen<strong className="text-warning">G</strong>oldies
            <GiPopcorn className="text-warning" />
            &copy;&nbsp;
            {date.getFullYear()}
          </p>
          <p className="text-center text-warning m-0 fst-italic">
            All Rights Reserved
          </p>
        </div>
        <div className="col-12 col-md-4 my-2">
          <p className="m-0 text-center">Follow Us</p>
          <p className="text-warning m-0 text-center fs-5">
            <FaFacebookSquare className="mx-2" />{" "}
            <FaInstagramSquare className="mx-2" />{" "}
            <FaYoutubeSquare className="mx-2" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
