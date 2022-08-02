import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Script from "next/script";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signInUser } from "../store/actions/auth/signin";
import Toast from "cogo-toast";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

const Signup = () => {
  const clientId =
    "258502189398-rccob1tb23kcrqfvdr4fbumb3eih7uve.apps.googleusercontent.com";

  // Cusom hooks Initialization
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  Cookies.remove("fb_id", { path: "/" });

  // Sign in Api Start

  const onSubmit = (data) => {
    console.log("data from submit...", data);
    let formData = {
      name: data.name,
      profile_url: "null",
      email: data.email,
      country: data.country,
      // gender: data.gender,
      // birthDay: data.birthDay,
      password: data.password,
      login_type: "1",
      google_id: "null",
      facebook_id: "null",
    };
    dispatch(signUpUser(formData));
  };

  const responseErrorGoogle = (res) => {
    console.log("Login Error", res);
  };

  const responseFacebook = async (res) => {
    console.log(res);
    const formData = {
      name: res.name,
      email: res.email,
      profile_url: res.picture?.data?.url,
      password: null,
      facebook_id: res.id,
      google_id: null,
      login_type: "3",
    };
    dispatch(signInUser(formData));
  };

  const responseGoogle = (res) => {
    console.log("Login Success", res);
    const data = res.profileObj;
    let formData = {
      name: data.name,
      profile_url: data.imageUrl,
      email: data.email,
      password: null,
      login_type: "2",
      google_id: data.googleId,
      facebook_id: null,
    };
    dispatch(signInUser(formData));
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
        <title>Sign Up Today to Access Exclusive Deals | Tribes by HHWT</title>

        {/* <!-- BS5 Style --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Custom Metas */}
        <meta name="description" content="Register. Don't have a Tribes account yet? Join now to gain access to exclusive deals from Muslim Friedly brands around the world!" />
        <meta name="keywords" content="app exclusive deals" />
      </Head>
      {/* <!-- Main Wrapper Starts here --> */}
      <header className="container-fluid">
        <div className="col-md-2 col-sm-6 col-xs-6 pb-2 d-flex justify-content-start hl section-logo mt-3 mb-3">
          <Link href="/" className="navbar-brand">
            <Image
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo.png`}
              alt="icon"
              height={30}
              width={100}
            />
          </Link>
        </div>
      </header>
      <div className="container-fluid signin-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-flex align-items-start">
              <img
                className="img-fluid"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/signup-pattern.svg`}
                alt="ico"
              />
            </div>
            <div className="col-md-6">
              <div className="login-sec">
                <h3 className="mb-4">Create An Account</h3>
                <h5 className="mb-4">
                  Already an user? &nbsp;{" "}
                  <span
                    onClick={() =>
                      (window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/sign-in`)
                    }
                  >
                    Sign In
                  </span>
                </h5>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors?.name && (
                      <p className="errMsg">
                        {errors?.name && errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      {...register("country", {
                        required: "Country is required",
                      })}
                    />
                    {errors?.country && (
                      <p className="errMsg">
                        {errors?.country && errors.country.message}
                      </p>
                    )}
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    />
                    {errors?.country && (
                      <p className="errMsg">
                        {errors?.gender && errors.gender.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Birthday"
                      {...register("birthDay", {
                        required: "BirthDay is required",
                      })}
                    />
                    {errors?.country && (
                      <p className="errMsg">
                        {errors?.birthDay && errors.birthDay.message}
                      </p>
                    )}
                  </div> */}
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="password"
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
                    </div>
                    {errors?.password && (
                      <p className="errMsg">
                        {errors?.password && errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group text-center mt-3">
                    <button
                      className="btn btn-teal text-center mb-3"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="seperator">Or Sign in With</div>
                <div className="row px-5">
                  <div className="col-6 pe-4 text-center">
                    <GoogleLogin
                      clientId={clientId}
                      buttonText=""
                      className="btn google-btn"
                      onSuccess={responseGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="col-6 ps-4 text-center">
                    <FacebookLogin
                      cssClass="btn fb-btn"
                      textButton=""
                      disableMobileRedirect={true}
                      appId="961495311350015"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={responseFacebook}
                      icon={
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/fb.svg`}
                          alt="icon"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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

export default Signup;
