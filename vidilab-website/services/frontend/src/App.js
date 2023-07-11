import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home';
import D3 from './pages/D3page';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/D3Page' element={<D3 />} />
            </Routes>
        </Router> 
    );
}
 
export default App;