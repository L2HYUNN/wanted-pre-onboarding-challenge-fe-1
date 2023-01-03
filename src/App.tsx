import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Routes>
      <GlobalStyles />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
