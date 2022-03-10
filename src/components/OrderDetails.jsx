import { useParams } from "react-router-dom";

function OrderDetails() {
    const { orderId } = useParams();

    return (
        <div>
            <h1>Order Details</h1>
            <p><strong>Order ID</strong> {orderId}</p>
        </div>
    )
}

export default OrderDetails;