import Header from "../components/header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";
import CTA from "../components/cta/CTA";

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers />
      </main>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Layout;