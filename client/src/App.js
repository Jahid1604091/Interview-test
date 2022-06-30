
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndividualFom from './components/Form/IndividualFom';
import Page1 from './pages/Page1';



function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/individual-form" element={<IndividualFom/>} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
