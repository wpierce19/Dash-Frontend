import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../pages/Header';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-blue-950 text-black dark:text-white min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="pt-[4.25rem] w-full min-h-[calc(100vh-4.25rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

