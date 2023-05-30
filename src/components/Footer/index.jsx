import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/banner.png" }}>
        <div className="redes">
            <a href="#">
                <img src="/img/facebook.png" alt="facebook.png" />
            </a>
            <a href="#">
                <img src="/img/instagram.png" alt="instagram.png" />
            </a>
            <a href="#">
                <img src="/img/twitter.png" alt="twitter.png" />
            </a>
        </div>
        <img src="#" alt="logo" />
        <strong>Desarrollado por Lucero Luciano 👩‍💻</strong>
    </footer>
}

export default Footer