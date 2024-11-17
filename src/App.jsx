import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./page/NotFoundPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
