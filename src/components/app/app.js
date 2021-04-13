import TopBar from "components/top-bar";
import TopSection from "components/top-section";
import ParagraphSection from "components/paragraph-section";
import CardsContainer from "components/cards-container";
import Button from "components/button";
import Footer from "components/footer";
import ResponsiveTopBar from "components/responsive-topbar";

import "./style.scss";

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <ResponsiveTopBar />
      <TopSection />
      <ParagraphSection />
      <div className="divider" />
      <h1 className="middleTile">
        Don’t forget about the spacing! It’s very important
      </h1>
      <CardsContainer />
      <div className="buttonContainer">
        <Button
          label="It’s almost done, don’t give up"
          className="buttonContainer-button"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
