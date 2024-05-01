import SignInDetails from "../../section/SignInDetails";
import SignUpForm from "../../section/SignUpForm";

const SignUp = () => {
  return (
    <>
      {/* <div id="loading">
        <div id="loading-center">
        </div>
    </div> */}
      {/* <button onClick={() => {
        wirec.put('test', 'smmit');
    }}>Check me</button> */}

      <div className="wrapper">
        <section className="sign-in-page">
          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>

            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>
          <div className="container p-0">
            <div className="row no-gutters">
              <div className="col-md-6 text-center pt-5">
                <SignInDetails />
              </div>
              <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                <div className="sign-in-from">
                  <h1 className="mb-0">Sign Up</h1>
                  <p>
                    Enter your email address and password to access admin panel.
                  </p>
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
