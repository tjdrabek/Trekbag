import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";
import "../index.css";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <Itemlist />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
