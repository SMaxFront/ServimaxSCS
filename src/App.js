import "./styles/main.css";
import PrestadorMedico from "./components/gestion/PrestadorMedico";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <br/>

      <PrestadorMedico />
      <Footer />
    </div>
  );
}

export default App;
