import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [searchKey, setSearchKey] = useState("");
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("is_logged_in");
    const userName = localStorage.getItem("user_name");
    const userId = localStorage.getItem("user_id");
    const userProfile = localStorage.getItem("user_profile");

    setIsLoggedIn(isLoggedIn);
    setUserName(userName);
    setUserId(userId);
    setUserProfile(userProfile);
  }, []);

  const logoutUser = () => {
    console.log("logout user ....");
    localStorage.removeItem("is_logged_in");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_profile");
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/login`;
  };

  return (
    <>
      {/* <!-- Header Starts here --> */}
      <header className="container-fluid pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 section-navbar">
              <div className="row mt-1 mt-md-2">
                <Navbar />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-6 pb-2 d-flex justify-content-end section-profile">
              
              {!isLoggedIn && (
                <div className="login-button">
                  <button
                    className="btn"
                    onClick={() => {
                      window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/login`;
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
              {isLoggedIn && (
                <div className="dropdown profile">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="avatar-img">
                      <img src={`https://meeko-cms.thewandergroup.com.sg/uploads/HHWT_Logo_8a98c382ea.svg`} alt="image"/>
                    </div>
                    <span>{isLoggedIn ? userName : ""}</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                   
                    <li>
                      <a className="dropdown-item" href="#!">
                        <img
                          className="ico"
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/settings-ico.svg`}
                          alt="ico"
                        />
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="dropdown-item" onClick={logoutUser}>
                          <img
                            className="ico"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logout-ico.svg`}
                            alt="ico"
                          />
                          Sign Out
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header Ends here -->    */}
    </>
  );
};

export default Header;
