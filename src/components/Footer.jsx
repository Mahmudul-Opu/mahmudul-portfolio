function Footer() {

    const year =
        new Date().getFullYear();


    return (
        <footer className="footer">

            <div>

                <strong>
                    Mahmudul Amin Opu
                </strong>

                <span>
                    © {year}
                </span>

            </div>

        </footer>
    );
}


export default Footer;