import { HacheTres } from "./components/Button";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { StyledLink } from "./components/StyledLink";


const App = () => {
  return (
    <BrowserRouter>
      <HacheTres>
          styled components
      </HacheTres>
      <StyledLink to="/ejemplo">ejemplo</StyledLink>
    </BrowserRouter>
  );
};

export default App


