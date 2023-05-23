import TopPannel from "./TopPannel";
import Breakfast from "./breakfast/Breakfast";
import Lunch from "./lunch/Lunch";
import Dinner from "./dinner/Dinner";
import Dessert from "./dessert/Dessert";
import "../css/general.css";
import "../css/app.css";


function App() {
  return (
    <div className="app">
      <TopPannel />
      <Breakfast />
      <Lunch />
      <Dinner />
      <Dessert />
    </div>
  );
}

export default App;
