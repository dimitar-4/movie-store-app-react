function Footer() {
    const date = new Date();

    return (
        <footer className="py-4 bg-dark text-white mt-auto">
            <p className="text-center m-0">Copyright &copy; - {date.getFullYear()} The Movie Store</p>
            <p style={{fontSize: 12}} className="text-center m-0 fw-bold fst-italic">All Rights Reserved</p>
        </footer>
    )
}

export default Footer;