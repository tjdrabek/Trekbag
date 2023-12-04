import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";
import "../index.css";
import { useState } from "react";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <Itemlist items={items} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
