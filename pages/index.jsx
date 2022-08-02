import Layout from "../components/Layout";
import { Carousel } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    [...document.querySelectorAll(".control")].forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  }, []);

  function handleTheme() {
    document.body.classList.toggle("light-mode");
  }
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="main-content">
        <header className="container header active" id="home">
          <div className="header-content">
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src="/images/hero.jpg" alt="" />
              </div>
            </div>
            <div className="right-header">
              <h1 className="name">
                Hi, I'm <span>Sarangan E. </span> Web Developer.
              </h1>
              <p>
                I'm a Web Developer, I love to create beautiful and functional
                websites.
              </p>
              <div className="btn-con">
                <a href="" className="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="container about" id="about">
            <div className="main-title">
              <h2>
                About <span>me</span>
                <span className="bg-text">my stats</span>
              </h2>
            </div>
            <div className="about-container">
              <div className="left-about">
                <h4>Information About me</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet labore nihil obcaecati consequatur. Debitis error
                  doloremque, vero eos vel nemo eius voluptatem dicta tenetur
                  modi. <br /> <br /> La musica delectus dolore fugiat
                  exercitationem a, ipsum quidem quo enim natus accusamus labore
                  dolores nam. Unde. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Harum non necessitatibus deleniti eum
                  soluta.
                </p>
                <div className="btn-con">
                  <a href="#" className="main-btn">
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon">
                      <i className="fas fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-about">
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">6+</p>
                    <p className="small-text">
                      Projects <br /> Completed
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">2+</p>
                    <p className="small-text">
                      Years of <br /> experience
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">5+</p>
                    <p className="small-text">
                      Happy <br /> Clients
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">4+</p>
                    <p className="small-text">
                      Customer <br /> reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <h4 className="stat-title">My Skills</h4>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="prog-title">html5</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">css</p>
                  <div className="progress-con">
                    <p className="prog-text">95%</p>
                    <div className="progress">
                      <span className="css"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">85%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">ReactJS</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">NodeJS</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="node"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">MySql</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="mysql"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2020 - 2021</p>
                <h5>
                  Junior Web Developer<span> - Skematix</span>
                </h5>
                <p>
                  Over 1 Year of Full Time Experience in User Interface/Web
                  development as a Front-end Developer. Excellent HTML/HTML5,
                  CSS/CSS3, JavaScript, JSON, Bootstrap, React Js, Tailwind css
                  Skills For Implementing Web Technologies.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2021 - present</p>
                <h5>
                  Software Engineer<span> - Smitiv Mobile Technologies.</span>
                </h5>
                <p>
                  Over 1.2 Year of Full Time Experience in User Interface/Web
                  development as a Front-end and Back-end Developer. Excellent
                  HTML/HTML5, CSS/CSS3, JavaScript, JSON, Bootstrap, React Js,
                  Tailwind css, SaaS, Material UI, Node Js, MySql, Express Js
                  Skills For Implementing Web Technologies.
                </p>
              </div>
            </div>
          </section>
          <section className="container" id="portfolio">
            <div className="main-title">
              <h2>
                My <span>Portfolio</span>
                <span className="bg-text">My Work</span>
              </h2>
            </div>
            <p className="port-text">
              Here is some of my work that I've done in various programming
              languages.
            </p>
            <div className="portfolios">
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port1.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port2.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port3.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port4.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port5.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port2.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="/images/port7.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container" id="blogs">
            <div className="blogs-content">
              <div className="main-title">
                <h2>
                  My <span>Blogs</span>
                  <span className="bg-text">My Blogs</span>
                </h2>
              </div>
              <div className="blogs">
                <div className="blog">
                  <img src="/images/port6.jpg" alt="" />
                  <div className="blog-text">
                    <h4>How to Create Your Own Website</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/blog1.jpg" alt="" />
                  <div className="blog-text">
                    <h4>How to Become an Expert in Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/blog2.jpg" alt="" />
                  <div className="blog-text">
                    <h4>Become a Web Designer in 10 Days</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/blog3.jpg" alt="" />
                  <div className="blog-text">
                    <h4>Debbuging made easy with Web Inspector</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/port1.jpg" alt="" />
                  <div className="blog-text">
                    <h4>Get started with Web Design and UI Design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/port3.jpg" alt="" />
                  <div className="blog-text">
                    <h4>This is what you need to know about Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container contact" id="contact">
            <div className="contact-container">
              <div className="main-title">
                <h2>
                  Contact <span>Me</span>
                  <span className="bg-text">Contact</span>
                </h2>
              </div>
              <div className="contact-content-con">
                <div className="left-contact">
                  <h4>Contact me here</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    laborum numquam? Quam excepturi perspiciatis quas quasi.
                  </p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Location</span>
                      </div>
                      <p>: Coimbatore, Tamilnadu, India</p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                      </div>
                      <p>
                        <span>: writetosarangan@gmail.com</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Education</span>
                      </div>
                      <p>
                        <span>: SNS College Of Engineering</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Mobile Number</span>
                      </div>
                      <p>
                        <span>: +918300565331</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-globe-africa"></i>
                        <span>Languages</span>
                      </div>
                      <p>
                        <span>: Tamil, English </span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-icons">
                    <div className="contact-icon">
                      <a href="www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-contact">
                  <form action="" className="contact-form">
                    <div className="input-control i-c-2">
                      <input type="text" required placeholder="YOUR NAME" />
                      <input type="email" required placeholder="YOUR EMAIL" />
                    </div>
                    <div className="input-control">
                      <input type="text" required placeholder="ENTER SUBJECT" />
                    </div>
                    <div className="input-control">
                      <textarea
                        name=""
                        id=""
                        cols="15"
                        rows="8"
                        placeholder="Message Here..."
                      ></textarea>
                    </div>
                    <div className="submit-btn">
                      <a href="#" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon">
                          <i className="fas fa-download"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="controls">
          <div className="control active-btn" data-id="home">
            <i className="fas fa-home"></i>
          </div>
          <div className="control" data-id="about">
            <i className="fas fa-user"></i>
          </div>
          <div className="control" data-id="portfolio">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="control" data-id="blogs">
            <i className="far fa-newspaper"></i>
          </div>
          <div className="control" data-id="contact">
            <i className="fas fa-envelope-open"></i>
          </div>
        </div>
        <div className="theme-btn" onClick={() => handleTheme()}>
          <i className="fas fa-adjust"></i>
        </div>
        <script src="app.js"></script>
      </div>
    </div>
  );
};
export default Home;
