import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./Components/Loader";
import { Analytics } from "@vercel/analytics/react";
import "./App.css"; // import your custom CSS styles
import NavBar from "./Components/NavBar";

function App() {
  const Landing = lazy(() => import("./Landing/Landing"));

  return (
    <div className="h-full min-h-screen w-full">
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
          <Analytics />
    </div>
  );
}

export default App;
