import { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Style from "../Layout/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>

      <div className={Style.container}>
        <Header />
        <div className={Style.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
