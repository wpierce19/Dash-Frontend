import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../pages/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegister from '../pages/Register';
import CreatePost from './features/post/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-[#1C1C1D] text-black dark:text-white w-full h-screen overflow-hidden">
        {/* Fixed Header */}
        <Header />

        {/* Scrollable area under the header */}
        <main className="mt-[4.25rem] h-[calc(100vh-4.25rem)] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<UserRegister />}/>
            <Route path='/createpost' element={<CreatePost />}/>
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

