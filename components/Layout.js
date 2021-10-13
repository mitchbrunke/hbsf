import Navbar from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, tickets }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar tickets={tickets} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
