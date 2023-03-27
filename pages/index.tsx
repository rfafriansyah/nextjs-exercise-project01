import Layout from "@/components/Layout";

import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <h1 className={Styles["title-homepage"]}>Hello Rhama</h1>
      </Layout>
    </>
  );
}
