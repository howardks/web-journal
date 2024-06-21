function Footer() {
    let date = new Date().getFullYear();

    return (
        <div>
            <p>
                &copy; {date} Kaylie Howard
            </p>
        </div>
    )
}

export default Footer;