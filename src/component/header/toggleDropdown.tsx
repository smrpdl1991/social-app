import { logout } from "../../utils/logout";

const SubDropdown = () => {
    return (
        <div className={`sub-drop dropdown-menu caption-menu `}>
            <div className="card shadow-none m-0">
                <div className="card-header  bg-primary">
                    <div className="header-title">
                        <h5 className="mb-0 text-white">Hello i CystBn</h5>
                        <span className="text-white font-size-12">Available</span>
                    </div>
                </div>
                <div className="card-body p-0 ">
                    <a href="../app/profile.html" className="iq-sub-card iq-bg-primary-hover">
                        <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-primary">
                                <i className="ri-file-user-line"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0 ">My Profile</h6>
                                <p className="mb-0 font-size-12">View personal profile details.</p>
                            </div>
                        </div>
                    </a>
                    <a href="../app/profile-edit.html" className="iq-sub-card iq-bg-warning-hover">
                        <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-warning">
                                <i className="ri-profile-line"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0 ">Edit Profile</h6>
                                <p className="mb-0 font-size-12">Modify your personal details.</p>
                            </div>
                        </div>
                    </a>
                    <a href="../app/account-setting.html" className="iq-sub-card iq-bg-info-hover">
                        <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-info">
                                <i className="ri-account-box-line"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0 ">Account settings</h6>
                                <p className="mb-0 font-size-12">Manage your account parameters.</p>
                            </div>
                        </div>
                    </a>
                    <a href="../app/privacy-setting.html" className="iq-sub-card iq-bg-danger-hover">
                        <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-danger">
                                <i className="ri-lock-line"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0 ">Privacy Settings</h6>
                                <p className="mb-0 font-size-12">Control your privacy parameters.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-inline-block w-100 text-center p-3">
                        <button className="btn btn-primary iq-sign-btn" onClick={() => logout()}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubDropdown