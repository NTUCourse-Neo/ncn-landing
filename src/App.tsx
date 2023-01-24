import { HomePage } from "@/containers/HomePage";
import { Route, Routes } from "react-router-dom";
import { Mobile } from "@/containers/Mobile";
import { DisplayTagsProvider } from "@/components/DisplayTagsProvider";

function App() {
  return (
    <Routes>
      <DisplayTagsProvider>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobile" element={<Mobile />} />
      </DisplayTagsProvider>
    </Routes>
  );
}

export default App;
