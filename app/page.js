import Header from "../component/header.jsx";
import Banner from "../component/banner.jsx";
import Proprietor from "@/component/proprietor.jsx";
import About from "../component/about.jsx";
import Service from "../component/service.jsx";
import Production from "@/component/production.jsx";
import Customer from "@/component/customer.jsx";
import Company from "../component/company";
import Footer from "@/component/footer.jsx";

export default function Home () {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Proprietor></Proprietor>
      <About></About>
      <Service></Service>
      <Production></Production>
      <Customer></Customer>
      <Company></Company>
      <Footer></Footer>
    </>
  );
}
