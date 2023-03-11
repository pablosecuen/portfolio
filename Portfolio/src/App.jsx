import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader";
import reactLogo from "./assets/react.svg";
import "./App.css"; // import your custom CSS styles
import "./tailwind.css"; // import Tailwind CSS styles

function App() {
  const Landing = lazy(() => import("./Landing/Landing"));

  return (
    <div className="h-full min-h-screen w-full">
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
