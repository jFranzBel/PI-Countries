import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import CreateActivity from './Components/CreateActivity/CreateActivity.jsx';
import CountryDetail from './Components/CountryDetail/CountryDetail.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import './App.css';


function App() {
     return (
          <Router>
               <div>
                    <Routes>
                         <Route path="/" element={<LandingPage />} />
                         <Route path="/home" element={<Home />} />
                         <Route path="/activities" element={<CreateActivity />} />
                         <Route path="/countries/:id" element={<CountryDetail />} />
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
