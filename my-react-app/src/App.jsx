import Register from "./Register.jsx";
import List from "./List.jsx";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    
    return( 
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
    );
    
    };

export default App
