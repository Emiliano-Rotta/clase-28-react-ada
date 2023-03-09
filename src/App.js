import Home from "./components/Home";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Home />
      <Button text="holi" />
      <Button styles="btn-2" text="Boton 2 " />
      <Button styles="btn-3" text="Boton 3" />
      <Button styles="btn-4" text="Boton 4" />
    </div>
  );
}

export default App;
