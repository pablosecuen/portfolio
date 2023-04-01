import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { getCLS, getFID, getLCP } from "web-vitals";

function sendToAnalytics(metric) {
  // Send the metric data to your analytics service
  console.log(metric);
}

// Measure Core Web Vitals metrics
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </BrowserRouter>
);
