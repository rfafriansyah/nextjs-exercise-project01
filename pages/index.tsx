import Header from "@/components/Header";
import Footer from "../components/Footer";

import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <h1 className={Styles["title-homepage"]}>Hello Rhama</h1>
      <Footer></Footer>
    </>
  );
}
