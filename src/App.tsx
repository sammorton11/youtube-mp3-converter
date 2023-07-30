import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ConversionPage} from "./components/ConversionPage.tsx";
import {Disclaimer} from "./components/Disclaimer.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<ConversionPage/>}></Route>
              <Route path={"/about"} element={<Disclaimer/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
