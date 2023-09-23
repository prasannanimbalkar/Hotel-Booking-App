import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/list";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />}/>
        <Route path="*" element={<>404</>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;