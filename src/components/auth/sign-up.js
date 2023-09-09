// "use client";
// import { useState } from "react";

export default function SignUp({ changeVal }) {
  return (
    <section className="sign-up">
      <div className="align-items-center">
        <div className="card">
          <img className="margin-center" src="/images/instagram.png" alt="" />
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button className="button button-bordered">
            <div>
              <img src="/images/facebook-logo-small.png" alt="" />
              <span>Log in with Facebook</span>
            </div>
          </button>
          <div className="line-body">
            <div className="line"></div>
            <span className="line-text">OR</span>
            <div className="line"></div>
          </div>
          <form action="">
            <input
              className=""
              type="text"
              placeholder="Mobile Number or Email"
            />
            <input className="" type="text" placeholder="Full Name" />
            <input className="" type="text" placeholder="Username" />
            <input className="" type="password" placeholder="Password" />
            <span className="card-info">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <a className="visible-link">Learn More</a>{" "}
              </p>
              <p>
                By signing up, you agree to our{" "}
                <a className="visible-link">Terms</a>,{" "}
                <a className="visible-link">Privacy Policy</a> and{" "}
                <a className="visible-link">Cookies Policy</a> .
              </p>
            </span>
            <button className="button button-bordered">
              <span>Sign up</span>
            </button>
          </form>
        </div>
        <div className="card">
          <p>
            Have an account?{" "}
            <a
              onClick={() => {
                changeVal(0);
              }}
              className="visible-link"
            >
              Log in
            </a>
          </p>
        </div>
        <div className="get-it">
          <p>Get the app.</p>
          <div className="get-it-images">
            <img src="/images/get-it-google-play.png" alt="" />
            <img src="/images/get-it-microsoft.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
