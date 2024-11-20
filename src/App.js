import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Canvas/>
      <Home/>
      <Customizer/>
    </main>
  );
}

export default App;
