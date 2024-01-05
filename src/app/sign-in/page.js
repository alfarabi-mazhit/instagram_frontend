"use client";
import Footer from "@/components/global/footer";
import Link from "next/link";

export default function SignIn() {
  return (
    <main>
      <section className="sign-in">
        <img
          style={{ userSelect: "none" }}
          src="/images/phone-screen.png"
          alt=""
        />
        <div className="flex flex-d-cl flex-ai-c ">
          <div className="card">
            <img className="flex flex-m-c" src="/images/instagram.png" alt="" />
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
            <a className="visible-link flex flex-m-c mt4">Forgot password?</a>
          </div>
          <div className="card">
            <p>
              Don't have an account?{" "}
              <Link className="visible-link" href={"/sign-up"}>
                Sign up
              </Link>
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
      <Footer />
    </main>
  );
}
