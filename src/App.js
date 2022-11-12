import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from './components/Init';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Init></Init>}></Route>
          <Route path='/character/:id' element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
