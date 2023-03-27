import "./App.css";
import { MobileAccordion } from "./MobileAccordion";
//import { DesktopAccordion } from "./DesktopAccordion";
import "./MobileAccordion.css";
function App() {
  return (
    <main>
      <div className="App">
        {/* {window.innerWidth < 750 ? <MobileAccordion /> : <DesktopAccordion />} */}
        <MobileAccordion />
      </div>
    </main>
  );
}

export default App;
