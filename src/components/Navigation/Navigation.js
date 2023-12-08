import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const toggleRoutes = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      navigate('/resume');
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <button onClick={toggleRoutes}>Toggle Routes</button>
    </div>
  );
};

export default Navigation;
