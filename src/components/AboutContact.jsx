import { BsArrowBarRight } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { GiUsbKey } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";

function AboutContact() {
  return (
    <div>
      <h2 className="text-center text-uppercase mb-4">About Us</h2>
      <p className="text-center mb-4">
        Screen Goldies is what it's considered by many - your living room
        friendly online movie store. We provide easy and quick way to purchase a
        physical copy of the highest rated ever movies by the biggest rating
        online movie library in the world to your personal collection for years
        to come. Most of our movies are often called 'absolute classics' or 'a
        must see'. Our goal is to turn your movie nights alone or with friends
        in to a night to remember.
      </p>
      <h4 className="text-center text-uppercase mb-4">And Remember</h4>
      <div className="row bg-dark text-light mb-4 p-3 border-top border-bottom border-3 border-warning">
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <MdOutlineLocalShipping className="fs-2 text-warning" />
          </p>
          <em>
            Shipment and delivery is always <strong>FREE</strong>!!!
          </em>
        </div>
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <GiUsbKey className="fs-2 text-warning" />
          </p>
          <em>High quality physical formats!!!</em>
        </div>
        <div className="col-12 col-md-4 text-center my-2">
          <p className="m-0">
            <RiRefund2Line className="fs-2 text-warning" />
          </p>
          <em>
            <strong>FREE</strong> returns and refunds in 48 hours!!!
          </em>
        </div>
      </div>
      <hr />
      <h2 className="text-center text-uppercase mb-4">Contact Us</h2>
      <form className="mb-4">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 offset-lg-2 bg-dark p-2">
            <div className="row g-3 mb-4">
              <div className="col form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
                <label htmlFor="floatingInput">First name</label>
              </div>
              <div className="col form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
                <label htmlFor="floatingInput">Last name</label>
              </div>
            </div>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="input-group mb-4">
              <span className="input-group-text bg-warning">
                Message <BsArrowBarRight className="fs-4" />
              </span>
              <textarea
                className="form-control"
                style={{ height: "6rem" }}
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning d-flex align-items-center">
                Send Message&nbsp;
                <BiMessageSquareCheck className="fs-4" />
              </button>
            </div>
          </div>
        </div>
      </form>
      <h4 className="text-center text-uppercase mb-4">Or write us at</h4>
      <p className="fs-6 mb-1 text-center">
        <GrMail />{" "}
        <em>
          <strong>customer.service@sgms.net</strong>
        </em>{" "}
        - for questions concerning orders.
      </p>
      <p className="fs-6 mb-4 text-center">
        <GrMail />{" "}
        <em>
          <strong>customer.info@sgms.net</strong>
        </em>{" "}
        - for questions concerning services, FAQ etc.
      </p>
    </div>
  );
}

export default AboutContact;
