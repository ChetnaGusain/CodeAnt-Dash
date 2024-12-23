import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RepositoryCard from './components/RepositoryCard';
import Login from './components/Login';

const App = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // Function to log out the user
  const handleLogout = () => {
    setIsLoggedOut(true); 
  };

  if (isLoggedOut) {
    return <Login />; 
  }

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar on the Left */}
      <Sidebar handleLogout={handleLogout} />
  
      {/* Main Content on the Right */}
      <div className="flex-1 flex flex-col p-6">
        <RepositoryCard />
      </div>
    </div>
  );
  
  
};

export default App;
