import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';
import { Briefcase, User } from '../../img/portfolio/navigation/index';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentPath, setPath } = useNavigation();

  const toggleRoutes = () => {
    if (currentPath === '/') {
      setPath('/resume');
      navigate('/resume');
    } else {
      setPath('/');
      navigate('/');
    }
  };

  return (
    <div className='navigation'>
      <img
        src={currentPath === '/' ? Briefcase : User}
        alt='nav icon'
        onClick={toggleRoutes}
        className='nav-icon'
      ></img>
    </div>
  );
};

export default Navigation;
