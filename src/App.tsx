import "./App.scss";
import {
  Container
} from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import CustomHero from "./components/CustomHero";
import TopSellersSection from "./components/TopSellersSection";

function App() {



  return (
    <div className="App">
      <Container fluid className="g-0 m-0 p-0 bg-section-color">
        <CustomNavbar/>
        <CustomHero/>
        <TopSellersSection/>
      </Container>
    </div>
  );
}

export default App;
