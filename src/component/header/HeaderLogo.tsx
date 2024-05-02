const HeaderLogo = () => {
    return (
        <div className="iq-navbar-logo d-flex justify-content-between">
            <a href="#">
                {/* <img src={logo} alt="logo" className="img-fluid" /> */}
                <span>SocialV</span>
            </a>
            <div className="iq-menu-bt align-self-center">
                <div className="wrapper-menu">
                    <div className="main-circle"><i className="ri-menu-line"></i></div>
                </div>
            </div>
        </div>
    );
}
export default HeaderLogo