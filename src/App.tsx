import CreateHeader from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";

import FooterSection from "./components/Footer";
import "./App.css";
import FilterSecton from "./components/Filter";
import CardShow from "./components/CardShow";
import { useEffect, useState } from "react";
import { CardData } from "./type/type";
function App() {
  const [bikes, setBikes] = useState<CardData[]>([]);
const [filteredBikes,setFilteredBikes] = useState<CardData[]>([])
  useEffect(() => {
   fetch("https://challenges.brainster.tech/ajax_data/data.json")
   .then((res)=>res.json())
   .then((data)=>{setBikes(data.products),setFilteredBikes(data.products)})
  }, []);
  return (
    <div>
      <CreateHeader />
      <FilterSecton allData = {bikes} setFilteredData={setFilteredBikes} filteredData = {filteredBikes} />
      
      <CardShow bikes = {filteredBikes}  />

      <FooterSection />
    </div>
  );
}

export default App;
