import { GiPopcorn } from "react-icons/gi";
import { GrMail } from "react-icons/gr";

function Footer() {
  const date = new Date();

  return (
    <footer className="py-4 bg-dark text-white mt-auto">
      <div className="d-flex justify-content-evenly align-items-center">
        <div>
          <p className="m-0 text-center">Contact Us</p>
          <p className="text-warning m-0">
            <GrMail />{" "}
            <strong style={{ fontSize: 12 }} className="text-center fst-italic">
              customer.service@sgms.net
            </strong>
          </p>
        </div>
        <div>
          <p className="text-center m-0 d-flex align-items-center">
            {date.getFullYear()} Screen Goldies
            <GiPopcorn className="text-warning" />
            &copy;
          </p>
          <p
            style={{ fontSize: 12 }}
            className="text-center text-warning m-0 fw-bold fst-italic"
          >
            All Rights Reserved
          </p>
        </div>
        <div>
          <p className="m-0 text-center">Follow Us</p>
          <p className="text-warning m-0"></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
