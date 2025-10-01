import Services from "./layouts/Services";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

function App() {

  return (
    <div className="min-h-screen bg-[#EBF0F3] text-black flex flex-col items-center justify-center">
      <hr className="w-[90%] border-t-2 border-[#026874] my-12" />
      <Services />
      <hr className="w-[90%] border-t-2 border-[#026874] my-12" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
