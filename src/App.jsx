import './App.css';
import { useState, useEffect } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // check localStorage for saved user info
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='w-screen h-screen'>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
