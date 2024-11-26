import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setAuthenticated(authStatus === 'true');
  }, []);

  if (!isAuthenticated) {
    return <Login setAuthenticated={setAuthenticated} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
