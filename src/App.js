import "./App.css";
import Header from "./Header";
import data from "./assets/data/data.json";
import Section from "./Section";

function App() {
  return (
    <div className="container">
      <div className="header-container">
        <Header />
      </div>
      {data.map((item) => {
        return (
          <div className="section-container">
            <Section
              className="section"
              heure={item.time}
              titre={item.title}
              type={item.type}
              duree={item.duration}
              image={item.image}
              direct={item.direct}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
