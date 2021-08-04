import Footer from "../components/Footer";
import Header from "../components/Header";
import React, {FC} from "react";

const Page: FC = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Page;