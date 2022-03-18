import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function Orders() {
  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (orderId && orderId !== "") {
      navigate("/orders/" + orderId);
    }
  }

  function goBack() {
    navigate("/movies/");
  }

  return (
    <div>
      <h2 className="text-uppercase text-center mb-4">Orders</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="orderId"
            name="orderId"
            placeholder="Order ID"
            className="form-control form-control-lg"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-dark">
            Get Order
          </button>
        </div>
        <div className="form-text">Please enter your order ID.</div>
      </form>
      <button
        className="btn btn-dark mx-2 my-4 d-flex align-items-center shadow"
        onClick={goBack}
      >
        <MdArrowBackIosNew /> &nbsp;Back
      </button>
    </div>
  );
}

export default Orders;
