function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
    // else alert("Sorry we are close now !");

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="footer__order">
                    <p>
                        We are open until {closeHour}:00 . Come visit us or
                        order online .
                    </p>
                    <button className="footer__btn-order">Order now !</button>
                </div>
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00{" "}
                </p>
            )}
        </footer>
    );
}

export default Footer;
