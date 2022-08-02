import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../store/actions/auth/signin";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";

const Signin = () => {

  // State Declarations
  const [eye, setEye] = useState(false);

  // Cusom hooks Initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Sign in Api Start

  const onSubmit = (data) => {
    console.log("data from submit...", data);
    let formData = {
      name: "null",
      profile_url: "null",
      email: data.email,
      password: data.password,
      login_type: "1",
      google_id: "null",
      facebook_id: "null",
    };
    // dispatch(signInUser(formData));
  };

  const handleEyes = () => {
    setEye(!eye);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
        <title>Sign in Page</title>

        {/* <!-- BS5 Style --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Custom Metas */}
        <meta name="description" content="Welcome to Enter your email address to sign in" />
        <meta name="keywords" content="Deals" />
      </Head>
      {/* <!-- Main Wrapper Starts here --> */}
      <div className="container-fluid signin-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-flex align-items-start">
              <img
                className="img-fluid"
                src={`/images/signup-pattern.svg`}
                alt="ico"
              />
            </div>
            <div className="col-md-6">
              <div className="login-sec">
                <h3 className="mb-4">Sign In</h3>
                <h5 className="mb-4">
                  New user? &nbsp;{" "}
                  <span
                    onClick={() =>
                      (window.location.href = `/sign-up`)
                    }
                  >
                    Create an account
                  </span>
                </h5>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Username or email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "This is not a valid email",
                        },
                      })}
                    />
                    {errors?.email && (
                      <p className="errMsg">
                        {errors?.email && errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type={eye ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 4,
                            message: "Password must be at least 4 characters",
                          },
                          maxLength: {
                            value: 10,
                            message:
                              "Password cannot exceed more than 10 characters",
                          },
                        })}
                      />
                      <span className="input-group-text">
                        {eye ? (
                          <img
                            src="images/visible-ico.svg"
                            alt="ico"
                            onClick={() => handleEyes()}
                          />
                        ) : (
                          <img
                            src="images/invisible-ico.svg"
                            alt="ico"
                            onClick={() => handleEyes()}
                          />
                        )}
                      </span>
                    </div>
                    {errors?.password && (
                      <p className="errMsg">
                        {errors?.password && errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="form-check keep-in my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label ms-3"
                      htmlFor="flexCheckChecked"
                    >
                      <span className="fw-500">Keep me signed in</span>
                    </label>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-teal text-center mb-3"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                {/* <p className="forgot-pass">
                  <a href="javascript:;">Forgot Password</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Wrapper Ends here --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Signin;
