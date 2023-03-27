import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Style from "../Layout/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.content}>{children}</div>
      <Footer />
    </div>
  );
}
