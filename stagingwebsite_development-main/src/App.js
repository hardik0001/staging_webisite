import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aboutus from "./components/pages/aboutus";
import Contactus from "./components/pages/contactus";
import Home from "./components/pages/home";
import Inthenews from "./components/pages/inthenews";
import LearningHub from "./components/pages/learninghub";
import SuccessStories from "./components/pages/successstories";
import Viredforbusiness from "./components/pages/viredforbusiness";
import Program from "./components/pages/programs";
import Abouthv from "./components/Abouthv";
import Policy from "./components/Policy"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route index element={<Home />} />
        <Route path="/successstories" element={<SuccessStories/>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/viredforbusiness" element={<Viredforbusiness></Viredforbusiness>} />
        <Route path="/inthenews" element={<Inthenews />} />
        <Route path="/learninghub" element={<LearningHub></LearningHub>}/>
        <Route path="/programs" element={<Program/>}/>
        <Route path="/privacypolicy" element={<Policy/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
