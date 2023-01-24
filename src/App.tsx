import { HomePage } from "@/containers/HomePage";
import { Route, Routes } from "react-router-dom";
import { Mobile } from "@/containers/Mobile";
import { DisplayTagsProvider } from "@/components/DisplayTagsProvider";

function App() {
  return (
    <DisplayTagsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </DisplayTagsProvider>
  );
}

export default App;
