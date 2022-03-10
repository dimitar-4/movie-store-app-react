import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
    const [orderId, setOrderId] = useState("");
    
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (orderId && orderId !== "") {
            navigate("/orders/" + orderId);
        }
    }

    return (
        <div>
            <h1>Orders</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="orderId" name="orderId" placeholder="Order ID" 
                        className="form-control form-control-lg" value={orderId} 
                        onChange={(e) => setOrderId(e.target.value)} />
                    <button type="submit" className="btn btn-outline-dark">
                        Get Order
                    </button>
                </div>
                <div className="form-text">
                    Please enter your order ID.    
                </div>
            </form>
        </div>
    )
}

export default Orders;