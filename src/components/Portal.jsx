import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal({ children, className = "root-portal", el = "div" }) {
    const [container] = useState(() => {
        return document.createElement(el);
    })

    useEffect(() => {
        container.classList.add(className);
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    }, [className, container])

    return createPortal(children, container);
}

export default Portal;