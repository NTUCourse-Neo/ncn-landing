import { HomePage } from "@/containers/HomePage";
import { Route, Routes } from "react-router-dom";
import { Mobile } from "@/containers/Mobile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  );
}

export default App;
