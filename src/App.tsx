import "./App.css";
import Card from "./components/card/card";
import FeatureCardsSection from "./components/card/featureCardSection";
import InnerPage from "./components/pages/innerPage"
import TopNotch from "./components/pages/topNotch"


const App = () => {
  return (
    <>
      <div>
        <Card />
        <FeatureCardsSection />
        <InnerPage/>
      <TopNotch/> 
      </div>
    </>
    )
}

export default App;
