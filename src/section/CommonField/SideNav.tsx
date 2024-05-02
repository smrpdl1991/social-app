const SideNav = () => {
    return (<>
        <div className="iq-sidebar  sidebar-default ">
            <nav className="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" className="iq-menu">
                    <li className="active">
                        <a href="../dashboard/index.html" className=" ">
                            <i className="las la-newspaper"></i><span>Newsfeed</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="../app/profile.html" className=" ">
                            <i className="las la-user"></i><span>Profile</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </>)
}
export default SideNav