import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../pages/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegister from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-blue-950 text-black dark:text-white w-full h-screen overflow-hidden">
        {/* Fixed Header */}
        <Header />

        {/* Scrollable area under the header */}
        <main className="mt-[4.25rem] h-[calc(100vh-4.25rem)] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<UserRegister />}/>
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

