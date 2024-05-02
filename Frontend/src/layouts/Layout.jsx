import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Routers from "../routes/Routers";


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