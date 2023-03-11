import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  const Landing = lazy(() => import("./Landing/Landing"));
  // const { pathname } = useLocation();

  return (
    <div className="App min-h-screen">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
