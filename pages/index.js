import Layout from "../components/Layout";
import { Carousel } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
// import * as api from "../store/actions/common/API_Links";
// import {signIns} from "../store/actions/auth/signin";

const Home = ({ metaDatas }) => {

  return (
    <Layout metaDatas={metaDatas}>
      <div className="container-xl ipad-px-0">
        <section className="section-banner head-banner">
          <p>Home page section</p>
        </section>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  try {
    const props = {
      props: {
        metaDatas: {}
      },
    };

    return props;
  } catch (err) {
    console.log("error", err);
    return {
      props: {},
    };
  }
}

export default Home;
