import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';
import { faBriefcase, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <FontAwesomeIcon
        size='3x'
        icon={currentPath === '/' ? faBriefcase : faUserTie}
        alt='nav icon'
        onClick={toggleRoutes}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Navigation;
