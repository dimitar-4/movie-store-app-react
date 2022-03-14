import { GiPopcorn } from "react-icons/gi";

function Footer() {
  const date = new Date();

  return (
    <footer className="py-4 bg-dark text-white mt-auto">
      <div className="d-flex justify-content-evenly align-items-center">
        <div>
          <p>Contact Us</p>
        </div>
        <div>
          <p className="text-center m-0 d-flex align-items-center">
            Copyright &copy; - {date.getFullYear()} Screen Goldies{" "}
            <GiPopcorn className="text-warning" />
          </p>
          <p
            style={{ fontSize: 12 }}
            className="text-center text-warning m-0 fw-bold fst-italic"
          >
            All Rights Reserved
          </p>
        </div>
        <div>
          <p>Follow Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
