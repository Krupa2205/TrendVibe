const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    alert('You have been logged out!');
    window.location.reload();
  };
  