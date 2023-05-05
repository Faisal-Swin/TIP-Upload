
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./MainUpload";


function App() {

  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
        <Route exact path="/"  element={<Page/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
