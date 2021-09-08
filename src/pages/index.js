import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/common/navigation/Navbar";
import Footer from "../components/common/navigation/Footer";
import Header from "../components/page-section/home-page/Header";
import HomeCourses from "../components/page-section/home-page/HomeCourses";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profound Coder</title>
        <meta
          name="description"
          content="Learn to create amazing websites using HTML, CSS and JavaScript for free."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <HomeCourses />
      <Footer />
    </div>
  );
}
