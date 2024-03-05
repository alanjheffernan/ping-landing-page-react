import Form from "./components/form";
import Header from "./components/header";
import mainImage from "./images/illustration-dashboard.png";
import Footer from "./components/Footer";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className=" min-h-screen">
      <Header />
      <Form />
      <img
        src={mainImage}
        alt="mainImage"
        className="px-8  pb-[120px] pt-[72px] md:mx-auto md:w-2/3"
      />
      <SimpleForm/>
     <Footer/>
    </div>
  );
}

export default App;
