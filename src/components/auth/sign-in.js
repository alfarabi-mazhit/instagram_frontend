// "use client";
// import { useState } from "react";

export default function SignIn({ changeVal }) {
  return (
    <section className="sign-in">
      <img
        style={{ userSelect: "none" }}
        src="/images/phone-screen.png"
        alt=""
      />
      <div className="align-items-center ">
        <div className="card">
          <img className="margin-center" src="/images/instagram.png" alt="" />
          <form action="" method="POST">
            <input
              className=""
              type="text"
              placeholder="Phone number, username, or email"
            />
            <input className="" type="password" placeholder="Password" />
            <button className="button button-bordered">
              <span>Log in</span>
            </button>
          </form>
          <div className="line-body">
            <div className="line"></div>
            <span className="line-text">OR</span>
            <div className="line"></div>
          </div>
          <button className="button button-bordered">
            <div>
              <img src="/images/facebook-logo-small.png" alt="" />
              <span>Log in with Facebook</span>
            </div>
          </button>
          <a className="visible-link margin-center">Forgot password?</a>
        </div>
        <div className="card">
          <p>
            Don't have an account?{" "}
            <a
              onClick={() => {
                changeVal(1);
              }}
              className="visible-link"
            >
              Sign up
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
