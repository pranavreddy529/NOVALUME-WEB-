import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./corecomponents/Navbar";
import Footer from "./corecomponents/Footer";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import TechBreakdown from "./pages/tech/TechBreakdown";
import AppFeatures from "./pages/tech/AppFeatures";
import PurchasePage from "./pages/purchase/PurchasePage";
import { StatsContextProvider } from "./pages/home/context/StatsContext";
import NILMPage from "./corecomponents/nilm";
import AMLAPage from "./corecomponents/amla";
 
import Home2 from "./corecomponents/Home2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <StatsContextProvider>
              <Home />
            </StatsContextProvider>
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/tech-breakdown" element={<TechBreakdown />} />
        <Route path="/app-features" element={<AppFeatures />} />
        <Route path="/product-purchase" element={<PurchasePage />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/nilm" element={<NILMPage />} />
        <Route path="/amla" element={<AMLAPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
