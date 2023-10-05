import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Nav />

      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
